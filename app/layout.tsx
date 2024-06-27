import '@/app/ui/global.css'
import { inter } from './ui/fonts';
import { Metadata } from 'next';

export const metadata:Metadata={
  title:'Acme Dashboard',
  description:'The First Next.js Project I made using App Router',
  metadataBase: new URL('https://sewdevs.netlify.app')
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
