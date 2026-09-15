import { buildNotificationMessage, buildWhatsappFallbackUrl } from '@/lib/whatsapp/messages'
import { formatWhatsappPhone, isValidWhatsappPhone } from '@/lib/whatsapp/format-phone'

export interface NotifyCustomerPayload {
  customerPhone: string
  customerName: string
  trackingId: string
  status: string
  description?: string | null
  location?: string | null
  packageDescription?: string | null
}

export interface NotifyCustomerResponse {
  sent: boolean
  reason?: string
  fallbackUrl?: string
}

/**
 * Builds the WhatsApp status-update message and opens a wa.me chat with it
 * prefilled — no server round trip, no WhatsApp Cloud API involved.
 */
export async function notifyCustomerWhatsApp(
  payload: NotifyCustomerPayload,
): Promise<NotifyCustomerResponse> {
  if (!isValidWhatsappPhone(payload.customerPhone)) {
    return { sent: false, reason: 'Customer phone number is missing or invalid.' }
  }

  const message = buildNotificationMessage(payload)
  const fallbackUrl = buildWhatsappFallbackUrl(formatWhatsappPhone(payload.customerPhone), message)

  return {
    sent: false,
    reason: 'Opened WhatsApp with a prefilled message for manual send.',
    fallbackUrl,
  }
}
