const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => (
  // eslint-disable-next-line react/button-has-type
  <button {...props}>{children}</button>
);

export default Button;
