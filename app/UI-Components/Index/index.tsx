import Hero from "./Hero/page";
import About from "./About/page";
import Services from "./Services/page";
import Testimonial from "./Testimonial/page"
import Partners from "./Partners/page";

export default function Index() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonial />
      <Partners />
    </>
  );
}
