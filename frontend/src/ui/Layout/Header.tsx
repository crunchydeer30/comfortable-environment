import { Link } from "react-router-dom"
import useUser from "../../features/auth/hooks/useUser"
import Button from "../Button/Button";
import useSignOut from "../../features/auth/hooks/useSignOut";

const Header = () => {
  const { user } = useUser();
  const signOut = useSignOut();

  return (
    <header className="flex shadow items-center justify-between py-2 px-4">
      <Link to="/">Logo</Link>
      <nav className="flex gap-4">
        <Link to="/submissions">Заявки</Link>
        <Link to="/map">Карта</Link>
        {user ? <Button onClick={signOut} classes={['!p-0 !font-normal']}>Выйти</Button> : <Link to="/login">Войти</Link>}
      </nav>
    </header>
  )
}

export default Header