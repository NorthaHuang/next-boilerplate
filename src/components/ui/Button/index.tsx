const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  type = 'button',
  children,
  ...props
}) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} {...props}>
    {children}
  </button>
);

export default Button;
