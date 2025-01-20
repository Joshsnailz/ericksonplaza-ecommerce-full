import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ErikzonPlaza | Number one stop shop for all your products in Zimbabwe",
  description: "This is Home for EricksonPlaza",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
