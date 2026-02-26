function Generating({ className }) {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${className || ""}`}
    >
      <img
        src={import.meta.env.BASE_URL + "/portfolio/loading"}
        className="w-5 h-5 mr-4"
        alt="loading"
      />
    </div>
  );
}

export default Generating;
