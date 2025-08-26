import Header from "@/components/header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-[inconsolata]">
        <div className="fixed top-0 left-0 w-screen h-screen inset-0 -z-20 bg-[url('/images/background-mobile.png')] bg-cover bg-center" />

        <div className="absolute inset-0 -z-10 bg-[url('/images/pattern-lines.svg')] bg-repeat bg-top" />

        <Header />

        <div className="absolute z-10 bg-transparent w-full">{children}</div>
      </body>
    </html>
  );
}
