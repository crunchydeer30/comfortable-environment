import { Link } from "react-router-dom"

interface LogoProps {
  to?: string,
  classes?: string[]
}

const Logo = (props: LogoProps) => {
  const classNames = ['w-14', 'h-14'];
  if (props.classes) classNames.push(...props.classes);

  return (
    <Link
      to={props.to || "/"}
      className={classNames.join(' ')}
    >
      <img src="/logo.png" alt="logo" />
    </Link>
  )
}

export default Logo