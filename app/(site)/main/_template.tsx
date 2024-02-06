import { Metadata } from "next/types"

// TODO Выяснить подходящее применение

export const metadata: Metadata = {
  title: 'TEMPLATE',
}

export default function RootLoginLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body style={{backgroundColor: 'white', width: '55vw', margin: '0 auto', height: '100vh'}}>
        {children}
      </body>
    </html>
  )
}
