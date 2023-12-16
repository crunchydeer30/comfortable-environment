import LinkButton from "../../../ui/Button/LinkButton";

const Banner = () => {
  return (
    <section className="flex gap-24 items-center justify-between">
      <section className="flex flex-col gap-8 w-[40%]">
        <h1 className="text-4xl font-semibold">
          Делайте город лучше с нашими идеями!
        </h1>
        <p className="text-lg">
          На нашем сайте вы найдете множество полезной информации, советов и
          идей о том, как сделать наш город чище, зеленее и красивее.
          Присоединяйтесь к нам, чтобы обмениваться идеями, опытом и вносить
          свой вклад в улучшение нашего города.
        </p>
        <LinkButton to="/login" classes={["!w-1/2", "uppercase"]}>
          Присоединиться
        </LinkButton>
      </section>
      <img src="images/home-banner.png" alt="banner" />
    </section>
  );
};

export default Banner;
