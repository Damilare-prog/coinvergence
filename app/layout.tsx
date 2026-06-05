export const metadata = {
  title: 'Coinvergence',
  description: 'Digital Asset P2P Marketplace',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
