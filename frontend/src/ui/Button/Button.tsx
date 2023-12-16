
interface IButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  classes?: string[];
  style?: ButtonStyle;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (() => void )| ((e: any) => void);
}

export enum ButtonStyle {
  Primary = 'primary',
  Secondary = 'secondary',
}

const Button = (props: IButtonProps) => {
  const classNames = [
    'block',
    'px-4',
    'py-2',
    'rounded-3xl',
    'px-6',
    'py-2',
    'text-center',
    'font-semibold',
    'transition',
  ];

  switch (props.style) {
    case 'primary':
      classNames.push('text-white', 'bg-primary', 'hover:bg-primary-light');
      break;
    case 'secondary':
      classNames.push('text-primary', 'bg-gray-100', 'hover:bg-gray-200');
      break;
    default:
      classNames.push('text-white', 'bg-primary', 'hover:bg-primary-light');
      break;
  }

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