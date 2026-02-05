import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "ghost"
  | "theme";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const variantClasses: Record<
  ButtonVariant,
  string
> = {
  primary:
    "text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-md hover:shadow-lg hover:scale-[1.02]",
  secondary:
    "text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 font-medium",
  danger:
    "text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 font-medium",
  ghost:
    "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 bg-transparent",
  theme:
    "text-gray-800 dark:text-black dark:hover:text-white bg-transparent dark:bg-transparent hover:bg-gray-50 dark:text-black dark:hover:bg-gray-700 font-semibold hover:shadow-lg",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-4 py-3 text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      leftIcon,
      rightIcon,
      className = "",
      children,
      type = "button",
      disabled,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none";
    const widthClass = fullWidth ? "w-full" : "";
    const combined = [
      base,
      widthClass,
      variantClasses[variant],
      sizeClasses[size],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    if (variant === "theme") {
      return (
        <div className="relative rounded-lg p-[2px] bg-gradient-to-r from-green-300/100 to-yellow-300/100 transition-all duration-300">
          <button
            ref={ref}
            type={type}
            disabled={disabled}
            className={combined}
            {...props}
          >
            {leftIcon}
            {children}
            {rightIcon}
          </button>
        </div>
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={combined}
        {...props}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
