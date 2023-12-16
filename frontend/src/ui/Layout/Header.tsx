import { Link } from "react-router-dom";
import useUser from "../../features/auth/hooks/useUser";
import LinkButton from "../Button/LinkButton";
import Button from "../Button/Button";
import useSignOut from "../../features/auth/hooks/useSignOut";
import Logo from "../Logo";
import { ButtonStyle } from "../Button/types";

const Header = () => {
  const { user } = useUser();
  const signOut = useSignOut();

  return (
    <header className="flex border-b-[2px] border-fontPrimary items-center justify-between py-3 px-8 container mx-auto">
      <div className="min-w-[25%]">
        <Logo />
      </div>
      <nav className="flex gap-8 items-center">
        <Link
          to="/submissions"
          className="text-lg hover:text-primary transition"
        >
          Работы
        </Link>
        <Link to="/teams" className="text-lg hover:text-primary transition">
          Команды
        </Link>
        <Link to="/map" className="text-lg hover:text-primary transition">
          Карта
        </Link>
        <Link to="/about" className="text-lg hover:text-primary transition">
          О нас
        </Link>
      </nav>
      <section className="flex gap-6 items-center justify-between min-w-[25%]">
        {user ? (
          <Button onClick={signOut} classes={["!p-0 !font-normal"]}>
            Выйти
          </Button>
        ) : (
          <>
            <LinkButton
              to="/register"
              classes={["uppercase", "!w-[50%]"]}
              style={ButtonStyle.Secondary}
            >
              Регистрация
            </LinkButton>
            <LinkButton to="/login" classes={["uppercase", "!w-[50%]"]}>
              Вход
            </LinkButton>
          </>
        )}
      </section>
    </header>
  );
};

export default Header;
