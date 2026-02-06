import "./globals.css";
import Header from "./components/Header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
