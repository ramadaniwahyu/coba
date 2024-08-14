import { Metadata } from "next";

import '@/app/ui/globals.css';
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Perdata PN Kab. Kediri',
    default: 'Perdata PN Kab. Kediri',
  },
  description: 'Kepaniteraan Muda Perdata Pengadilan Negeri Kabupaten Kediri',
  metadataBase: new URL('https://instagram.com/pnkabkediri'),
};

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
