"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, ShieldCheck } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* ── Top utility bar ── */}
      <div className="hidden sm:block" style={{ backgroundColor: "#DC2626" }}>
        <div className="container mx-auto flex items-center justify-between px-4 py-2 lg:px-8">
          <div className="flex items-center gap-6">
            <a
              href="tel:+971559933478"
              className="flex items-center gap-2 text-xs text-primary-foreground/90 transition-colors hover:text-primary-foreground"
            >
              <Phone className="h-3.5 w-3.5" />
              +971 55 993 3478
            </a>
            <a
              href="mailto:info@dxbrunnerscargo.com"
              className="flex items-center gap-2 text-xs text-primary-foreground/90 transition-colors hover:text-primary-foreground"
            >
              <Mail className="h-3.5 w-3.5" />
              info@dxbrunnerscargo.com
            </a>
          </div>
          <Link
            href="/auth/login"
            className="flex items-center gap-1.5 text-xs font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            Staff Login
          </Link>
        </div>
      </div>

      {/* ── Main bar ── */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
          <Link href="/tracking" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="DXB Runners Cargo"
              width={180}
              height={50}
              className="h-14 w-auto"
              priority
            />
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              href="/tracking"
              className="text-sm font-semibold tracking-tight"
              style={{ color: "#DC2626" }}
            >
              Track Shipment
            </Link>
            <Link
              href="/auth/login"
              className="hidden sm:block text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              Staff Login
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
