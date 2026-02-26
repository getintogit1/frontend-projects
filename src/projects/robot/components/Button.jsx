import ButtonSvg from "../assets/svg/ButtonSvg.jsx";

const Button = ({ className, href, onClick, children, px, white, link }) => {
  const classes = `button relative items-center justify-center h-11 transition-colors hover:text-color-1 ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  const spanClasses = "relative z-10";
  const renderButton = () => {
    return (
      <button onClick={onClick} className={classes}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
      </button>
    );
  };

  const renderLink = () => {
    return (
      <a href={href} className={classes}>
        <span className={spanClasses}>{children}</span>
      </a>
    );
  };

  return link ? renderLink() : renderButton();
};

export default Button;
