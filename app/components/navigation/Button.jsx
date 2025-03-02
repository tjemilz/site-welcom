import Link from "next/link";

const Button = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition mx-4 "
    >
      {children}
    </Link>
  );
};

export default Button;
