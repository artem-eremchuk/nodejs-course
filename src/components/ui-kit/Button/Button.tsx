type ButtonType = "button" | "submit" | "reset" | undefined;

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: ButtonType;
  className?: string;
  title?: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
}

const Button: React.FC<IButton> = ({ className, children, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
