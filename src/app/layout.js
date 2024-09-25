import localFont from "next/font/local";
import "./globals.css";
import Navigation from "./Navigation/Navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Combine the Layout component into the RootLayout
export const metadata = {
  title: "Aishwarya Shree Portfolio",
  description: "Aishwarya Shree Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div>
          {children}
          <Navigation />
        </div>
      </body>
    </html>
  );
}
