import type { Metadata } from "next";
import { Kanit } from 'next/font/google'
import "./globals.css";
const kanit = Kanit({
  subsets: ['thai', 'latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})
 
export const metadata: Metadata = {
  title: "Calculatot Varit 2025 by DTI-SAU",
  description: "เครื่องคำนวณหลากหลาย",
  keywords: ['cal', 'BMI', 'BMR', 'Car Installment'],
  icons: {
    icon: '/cal.png'
  }
};  
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.className} ${kanit.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
 
 