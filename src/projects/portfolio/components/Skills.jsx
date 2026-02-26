import { aboutItems } from "../constant/data.js";

const base = import.meta.env.BASE_URL;

function Skills() {
  return (
    <div>
      {/*Title*/}
      <div>
        <h3>Skills</h3>
        <p>
          Here are the frameworks,libaries,services and runtimes i have
          experience with. This is not a complete list i'm constantly going new
          skills and hence it can be a little bit outdated.
        </p>
      </div>

      {/*Wrapper*/}
      <div className="flex gap-3.5 flex-wrap mt-8">
        {aboutItems.map((item) => (
          <div key={item.id} className="flex items-center gap-2">
            {/*Icon*/}
            <span className="size-6 flex items-center justify-center">
              <img src={item.icon} alt={item.label} width={26} height={26} />
            </span>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
