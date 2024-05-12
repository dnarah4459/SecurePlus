import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

{/* In this code, we are basically importing the text fonts that we want to use for the rest of our application */}
const inter = Inter({ 
  subsets: ["latin"], 
  variable: '--font-inter'
 });


 const ibmPlexSerif = IBM_Plex_Serif({ 
  subsets: ["latin"], 
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
 });

{/* In this code, we are basically configuring the text fonts. 
We are basicalluy specifying which fonts that we want to 
import and use in our application and we configuring those 
fonts. We now will be able to utilize these fonts across the entire wen application
We are baiscally just configuring them. We include parameters, such as subsets, variable, and weight
subsets: this is the subsets of the font to include
Variable this is how we cna reference the font in teh CSS code. 
Weight specifed how bold or light the font is.  */}


export const metadata: Metadata = {
  title: "SecurePulse",
  description: "A next generation banking platform that allows user's to track financials and transfer money",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ `${inter.className} ${ibmPlexSerif.variable}` }>{children}</body>
    </html>
  );
  {/* In line 40, we are basically allows us to use those fonts across our entire application   */}
}
