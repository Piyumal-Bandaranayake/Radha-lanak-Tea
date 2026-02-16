import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dancingScript = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
});

export const metadata = {
  title: "Radha Lanka - Premium Organic Tea",
  description: "Exquisite handmade organic tea from the heart of Sri Lanka.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${dancingScript.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

