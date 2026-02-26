import { companyLogos } from "../constants/data.js";

export default function CompanyLogos({ className }) {
  return (
    <div className={className || ""}>
      <h5 className="mb-6 text-center tagline text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, i) => {
          console.log(companyLogos);
          return (
            <li
              className="flex items-center justify-center flex-1 h-[8.5rem]"
              key={i}
            >
              <img src={logo} width={134} height={28} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
