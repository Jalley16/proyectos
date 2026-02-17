import { string } from "zod/v4";
import "./about/styles.css"
import Header from "./components/Header";
import Movies from "./components/Movies";
import Footer from "./components/Footer"
// import "./globals.css"

export default function RootLayout({children,}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <div className="flex flex-col min-h-screen"></div>
      </body>
    </html>
  );
}
