interface IButton {
  text: string;
}

const Button = ({ text }: IButton) => {
  return <button className="">{text}</button>;
};

export default Button;
