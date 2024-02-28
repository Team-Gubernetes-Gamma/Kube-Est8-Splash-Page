import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kube Est8 - Kubernetes Monitoring for Developers",
  description: "Monitor your Kubernetes deployment objects to anticipate bottlenecks and security vulnerabilities before they become an issue at a production level.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
