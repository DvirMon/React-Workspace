import { Caprasimo, Inter, Roboto } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});
export const caprasimo = Caprasimo({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});
