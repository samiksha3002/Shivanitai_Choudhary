import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Congress Parichay Patra",
  description: "Election Campaign Digital Card",
};

// Yahan humne ': { children: any }' add kiya hai taaki Vercel error na de
export default function RootLayout({
  children,
}: {
  children: any; 
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}