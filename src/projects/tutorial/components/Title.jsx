function Title({ text, title, link }) {
  return (
    <div className="flex items-center justify-between flex-wrap gap-4 ">
      <div>
        <h2 className="nax-w-[640px] mt-4 mb-6  text-green-50">{title}</h2>
        <p>{text}</p>
      </div>
      <button className="secondary-btn">{link}</button>
    </div>
  );
}

export default Title;
