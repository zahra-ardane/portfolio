import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: "Zahra Ardaneh | Full-Stack Developer",
    template: "%s | Zahra Ardaneh",
  },
  description:
    "Portfolio of Zahra Ardaneh, a Full-Stack Developer specializing in modern web technologies, clean architecture, and scalable system design.",
  generator: "Next.js",
  authors: [{ name: "Zahra Ardaneh", url: "https://zahraardaneh.com" }],
  creator: "Zahra Ardaneh",
  metadataBase: new URL("https://zahraardaneh.com"),
  openGraph: {
    title: "Zahra Ardaneh | Full-Stack Developer",
    description:
      "Explore Zahra Ardaneh’s portfolio — a showcase of thoughtful design, robust architecture, and clean, modern web engineering.",
    url: "https://zahraardaneh.com",
    siteName: "Zahra Ardaneh",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zahra Ardaneh Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
