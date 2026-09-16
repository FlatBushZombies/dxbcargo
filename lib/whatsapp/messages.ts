import { TRACKING_STATUSES } from '@/lib/types'

const DEFAULT_TRACKING_URL = 'https://www.dxbrunnerscargo.com/tracking'

export function getTrackingUrl(trackingId?: string): string {
  const base = process.env.WHATSAPP_TRACKING_URL || DEFAULT_TRACKING_URL
  return trackingId ? `${base}?id=${encodeURIComponent(trackingId)}` : base
}

export function getStatusLabel(status: string): string {
  return TRACKING_STATUSES.find((item) => item.value === status)?.label || status
}

export interface StatusNotificationInput {
  customerName: string
  trackingId: string
  status: string
  statusLabel?: string
  description?: string | null
  location?: string | null
  packageDescription?: string | null
}

export function buildStatusUpdateMessage(input: StatusNotificationInput): string {
  const statusLabel = input.statusLabel || getStatusLabel(input.status)
  const lines = [
    `Hello ${input.customerName},`,
    '',
    `Your DXB Runners Cargo shipment status has been updated.`,
    '',
    `Tracking ID: ${input.trackingId}`,
    `Status: ${statusLabel}`,
  ]

  if (input.packageDescription) {
    lines.push(`Package: ${input.packageDescription}`)
  }

  if (input.location) {
    lines.push(`Location: ${input.location}`)
  }

  if (input.description) {
    lines.push(`Note: ${input.description}`)
  }

  lines.push(
    '',
    `Track your shipment anytime:`,
    getTrackingUrl(input.trackingId),
  )

  return lines.join('\n')
}

export function buildPickupReadyMessage(input: StatusNotificationInput): string {
  const pickupLocation =
    input.location ||
    process.env.WHATSAPP_PICKUP_LOCATION ||
    'DXB Runners Cargo Harare warehouse — Zimex Mall, Shop C15, 1st Floor, Corner Innez Terrace & George Silundika'

  const lines = [
    `Hello ${input.customerName},`,
    '',
    `Great news — your shipment is READY FOR PICKUP.`,
    '',
    `Tracking ID: ${input.trackingId}`,
  ]

  if (input.packageDescription) {
    lines.push(`Package: ${input.packageDescription}`)
  }

  lines.push(
    `Pickup location: ${pickupLocation}`,
    '',
    `Please bring your tracking ID when collecting your goods.`,
    '',
    `Track online: ${getTrackingUrl(input.trackingId)}`,
  )

  if (input.description) {
    lines.push('', `Note: ${input.description}`)
  }

  return lines.join('\n')
}

export function buildNotificationMessage(input: StatusNotificationInput): string {
  if (input.status === 'ready_pickup') {
    return buildPickupReadyMessage(input)
  }

  return buildStatusUpdateMessage(input)
}

export function buildWhatsappFallbackUrl(phone: string, message: string): string {
  const digits = phone.replace(/\D/g, '')
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
}
