import { twMerge } from "tailwind-merge";
interface ButtonProps {
	icon?: string;
	title: string;
  styles?: string;
}

const ButtonComponent = (props: ButtonProps) => {
	return (
		<button
      type="button"
      className={twMerge(
        "flex cursor-pointer items-center justify-center gap-2 w-full border border-gray-300 text-white font-sans font-normal py-2 px-4 mt-2",
        props.styles
      )}
    >
			{props.icon && <img src={props.icon} alt={props.title} className="w-5 h-5" />}
			{props.title}
		</button>
	);
};

export default ButtonComponent;
