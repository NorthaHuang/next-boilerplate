const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  type = 'button',
  children,
  ...rest
}) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} {...rest}>
    {children}
  </button>
);

export default Button;
