import type { Metadata } from "next";
import "./App.css";

export const metadata: Metadata = {
  title: "The Glorious Life & Lens | Majd Mubaidin",
  description: "Glorious food experiences and creative visuals from Amman, Jordan. Created by Majd Mubaidin & The Glorious Team.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-gold/30 selection:text-gold-light">
        {children}
      </body>
    </html>
  );
}
