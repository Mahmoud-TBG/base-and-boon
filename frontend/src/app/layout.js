import localFont from "next/font/local";
import "../../styles/globals.scss";

const alfontBold = localFont({
  src: "./fonts/alfontBold.otf",
  variable: "--font-alfont-bold",
  // weight: "100 900",
});

const alfontLight = localFont({
  src: "./fonts/alfontLight.ttf",
  variable: "--font-alfont-light",
  // weight: "100 900",
});

const alfontRegular = localFont({
  src: "./fonts/alfontRegular.ttf",
  variable: "--font-alfont-regular",
  // weight: "100 900",
});
const alfontMedium = localFont({
  src: "./fonts/alfontMedium.ttf",
  variable: "--font-alfont-medium",
  // weight: "100 900",
});

const dinCondensedBold = localFont({
  src: "./fonts/dinCondensedBold.ttf",
  variable: "--font-din-condensed-bold",
  // weight: "100 900",
});
const dinRegular = localFont({
  src: "./fonts/dinRegular.ttf",
  variable: "--font-din-condensed-regular",
  // weight: "100 900",
});



export const metadata = {
  title: "Base & Boon | Home",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${alfontBold.variable} ${dinCondensedBold.variable} ${alfontRegular.variable} ${alfontLight.variable} ${dinRegular.variable} ${alfontMedium.variable} `}>
        {children}
      </body>
    </html>
  );
}
