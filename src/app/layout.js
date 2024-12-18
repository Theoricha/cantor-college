import Image from "next/image";
import banner from "/website-images-assets/20230829_111351.jpg"
import ccLogo from "/website-images-assets/logo.png"
import "./global.css"
import Navbar from "./Components/Navbar";
export const metadata = {
  title: "Index",
};
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div className='container'>
        <header>
          <Navbar />
          <Image src={banner}
          alt = "Outside shot of cantor building" 
          id="banner"/>
          <h1>Cantor College</h1>
        </header>
        {children}
        </div>
          <footer>
          <div className="footer-flex">
            <div>
            <p>Where To Find Us</p>
            <ul>
              <li>Cantor College</li>
              <li>Main Street</li>
              <li>Sheffield</li>
              <li>SC4 2BB</li>
            </ul>
            </div>
            <div>
              <Image src={ccLogo}
              alt = "cantor college logo"
              height = "100"
              width = "100"/>
            </div>
            <div>
              <p>How to Contact us</p>
              <ul>
              <li>Tel: (01321) 2340 235</li>
              <li>Fax: (01321) 2340 236</li>
              <li>info@cantorcollege.ac.uk</li>
              </ul>
            </div>
            </div>
          </footer>
      </body>
    </html>
  );
}