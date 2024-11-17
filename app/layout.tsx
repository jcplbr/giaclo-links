import "@/styles/globals.css"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import localFont from "next/font/local"

const neueMontreal = localFont({
  src: [
    {
      path: "./fonts/PPNeueMontreal-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PPNeueMontreal-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/PPNeueMontreal-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
})

export const metadata: Metadata = {
  title: "GIACLO",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${neueMontreal.className} antialiased h-screen`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
