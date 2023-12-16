import { Link } from "react-router-dom";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-auto">
      <section className="container grid grid-cols-[1fr_2px_1fr] gap-16 py-8 mx-auto">
        <section className="flex gap-8">
          <Logo classes={['block', 'shrink-0']} />
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl">Комфортная окружающая среда</h2>
            <p>
              Преображение города является основной задачей нашего проекта.
              Эстетичное окружение влияет на наше настроение. Своим проектом мы
              хотим показать , что креативность и немного фантазии может
              радовать глаз каждый день.
            </p>
          </section>
        </section>

        <div className="w-[2px] bg-white"></div>
        <nav className="flex flex-wrap gap-8">
          <Link
            to="/about"
            className="text-xl border-b-[2px] border-b-transparent hover:border-b-white h-fit transition"
          >
            О нас
          </Link>
          <Link
            to="/teams"
            className="text-xl border-b-[2px] border-b-transparent hover:border-b-white h-fit transition"
          >
            Команды
          </Link>
          <Link
            to="/submissions"
            className="text-xl border-b-[2px] border-b-transparent hover:border-b-white h-fit transition"
          >
            Работы
          </Link>
          <Link
            to="/profile"
            className="text-xl border-b-[2px] border-b-transparent hover:border-b-white h-fit transition"
          >
            Личный кабинет
          </Link>
        </nav>
      </section>
    </footer>
  );
};

export default Footer;
