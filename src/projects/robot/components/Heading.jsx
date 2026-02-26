import Tagline from "./Tagline.jsx";

function Heading({ className, title, text, tag }) {
  return (
    <div className="max-2-[50rem] lg:mb-20 mx-auto mb-12 md:text-center">
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
      {tag && <Tagline className="mb-4 md:justify-center">{tag}</Tagline>}

      {title && <h2 className={className}>{title}</h2>}
    </div>
  );
}

export default Heading;
