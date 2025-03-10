import Link from "next/link";
import './customButton.css';

const Button = ({ href, children }) => {
  return (
    <Link 
      href={href} 
      className={`myButton`}
    >
      {children}
    </Link>
  );
};

export default Button;
