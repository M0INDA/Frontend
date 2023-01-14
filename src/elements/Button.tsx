interface IButton {
  text: string;
  onClick?: () => void;
}

const Button = ({ text, onClick }: IButton) => {
  return (
    <button className="" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
