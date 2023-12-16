import Banner from "./sections/Banner";
import Ideas from "./sections/Ideas";
import Staff from "./sections/Staff";
import SocialMedia from "./sections/SocialMedia";


const HomePage = () => {
  return (
    <section className="container max-w-[1400px] mx-auto flex flex-col gap-36">
      <Banner />
      <Ideas />
      <Staff />
      <SocialMedia />
    </section>
  );
};

export default HomePage;
