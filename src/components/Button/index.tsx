type ButtonProps = React.ComponentProps<"button"> & {
  children?: React.ReactNode;
};

export function Button({children, ...props}: ButtonProps) {
  return <button {...props} className="w-60 h-12 rounded-2xl bg-teal-500 text-white">{children}</button>;
}
