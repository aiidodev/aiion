import { Contact } from "@/components/sections/contact";
import { Founder } from "@/components/sections/founder";
import { Hero } from "@/components/sections/hero";
import { Method } from "@/components/sections/method";
import { Philosophy } from "@/components/sections/philosophy";
import { Services } from "@/components/sections/services";
import { Stack } from "@/components/sections/stack";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Method />
      <Philosophy />
      <Founder />
      <Stack />
      <Contact />
    </>
  );
}
