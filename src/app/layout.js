import Footer from "./components/footer";
import MainNav from "./components/mainNav";
import MobileNav from "./components/mobileNav";
import Topper from "./components/topper";
import "./globals.css";

export const metadata = {
  title: "Angelo's Ristorante",
  description: "Fine Organic Italian Dining",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/fpu5guj.css" />
      </head>
      <body>
        <div className="site-wrapper">
          <main>
            <Topper />
            <MainNav />
            <MobileNav />
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
