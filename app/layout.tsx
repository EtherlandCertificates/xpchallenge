import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/Header"
import "@/assets/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "xpChallenge",
  description: "xpChallenge",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-wheels bg-no-repeat bg-cover`}>
        <div className="flex flex-col min-h-screen container mx-auto py-6">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
