import { ButtonStyle } from "./types"

const style = (buttonStyle: ButtonStyle) => {
  const classNames = [
    'flex',
    'justify-center',
    'items-center',
    'px-4',
    'py-2',
    'rounded-lg',
    'text-center',
    'font-semibold',
    'transition',
  ];

  switch (buttonStyle) {
    case 'primary':
      classNames.push('text-white', 'border-[2px]', 'border-primary', 'bg-primary', 'hover:bg-primaryDark', 'hover:border-primaryDark');
      break;
    case 'secondary':
      classNames.push('text-fontPrimary', 'bg-gray-transparent', 'border-[2px]', 'border-primary');
      break;
    default:
      classNames.push('text-white', 'bg-primary', 'hover:bg-primary-light');
      break;
  }

  return classNames;
}

export default style;