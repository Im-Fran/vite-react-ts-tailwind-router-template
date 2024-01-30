import { AnchorProps } from "@/interfaces/components/AnchorProps.ts";
import { clsx } from "clsx";

const Anchor = ({ children, className, ...rest }: AnchorProps) => {
  const anchorClasses = clsx([
    "text-gray-600 transition-colors duration-300 hover:text-sky-500 dark:text-gray-300 dark:hover:text-blue-400",
    className || "",
  ]);

  return (
    <a
      className={anchorClasses}
      {...rest}>
      {children}
    </a>
  );
};

export default Anchor;
