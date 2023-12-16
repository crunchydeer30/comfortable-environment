import LinkButton from "../../../ui/Button/LinkButton";

const SocialMedia = () => {
  return (
    <section className="flex flex-col gap-8 max-w-[600px] text-center items-center justify-between mx-auto">
      <h2 className="text-4xl font-semibold">
        Наше сообщество на платформе "ВКонтакте"
      </h2>
      <p className="text-lg">
        Присоединяйтесь к нашей группе уже сегодня и будьте в курсе последних
        тенденций и идей в области улучшения городской среды. Вместе мы можем
        сделать наш город красивым и вдохновляющим для всех его жителей.
      </p>
      <LinkButton to="https://vk.com/comfortnaya_sreda" classes={["!w-1/2", "uppercase", 'py-4']}>
        Присоединиться
      </LinkButton>
    </section>
  );
};

export default SocialMedia;
