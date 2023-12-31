import { ButtonStyle } from "./types";
import style from "./style";

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  classes?: string[];
  style?: ButtonStyle;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (() => void )| ((e: any) => void);
}



const Button = (props: ButtonProps) => {
  const classNames = style(props?.style || ButtonStyle.Primary);
  if (props.classes) classNames.push(...props.classes);

  return (
    <button
      onClick={props?.onClick}
      className={classNames.join(' ')}
      type={props?.type || 'button'}
    >
      {props.children}
    </button>
  );
};



export default Button;