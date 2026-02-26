import { loading } from "../assets";

function Generating({ className }) {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${className || ""}`}
    >
      <img src={loading} className="w-5 h-5 mr-4" alt="loading" />
      Ai is Generating
    </div>
  );
}

export default Generating;
