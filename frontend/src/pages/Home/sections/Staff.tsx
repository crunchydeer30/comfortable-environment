import LinkButton from "../../../ui/Button/LinkButton";

const Staff = () => {
  return (
    <section className="flex gap-24 items-center justify-between">
      <section className="w-1/2 flex flex-col gap-8">
        <h1 className="text-4xl font-semibold">Наши талантливые специалисты</h1>
        <p className="text-lg">
          Здесь мы представляем вам наши фотографии, которые воплощают идеи и
          концепции по улучшению визуальной эстетической окружающей среды нашего
          города.
        </p>
        <LinkButton to="/login" classes={["!w-1/2", "uppercase"]}>
          Узнать подробнее
        </LinkButton>
      </section>
      <section className="flex flex-col gap-8 w-1/2 max-w-[400px] aspect-square">
        <img src="images/staff.png" alt="staff" className="w-full h-full" />
      </section>
    </section>
  );
};

export default Staff;
