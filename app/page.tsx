import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Method } from "@/components/sections/method";
import { Notes, Questions, Start } from "@/components/sections/more";
import { Philosophy } from "@/components/sections/philosophy";
import { Services } from "@/components/sections/services";
import { Stack } from "@/components/sections/stack";
import { Work } from "@/components/sections/work";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Work />
      <Method />
      <Philosophy />
      <Stack />
      <Start />
      <Questions />
      <Notes />
      <Contact />
    </>
  );
}
