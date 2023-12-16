import { ButtonStyle } from './types';
import style from './style';
import { Link } from 'react-router-dom';

interface LinkButtonProps {
  children: React.ReactNode;
  classes?: string[];
  style?: ButtonStyle;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  to: string;
}

const LinkButton = (props: LinkButtonProps) => {
  const classNames = style(props?.style || ButtonStyle.Primary);
  if (props.classes) classNames.push(...props.classes);

  return (
    <Link
      to={props.to}
      className={classNames.join(' ')}
    >
      {props.children}
    </Link>
  );
};

export default LinkButton