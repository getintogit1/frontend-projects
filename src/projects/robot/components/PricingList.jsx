import { pricing } from "../constants/data.js";
import Button from "./Button.jsx";
import { check } from "../assets";

function PricingList() {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 border border-n-6 rounded-[2rem] bg-n-8 lg:w-auto even:py-14 odd:py-8 odd:my-4 "
        >
          <h4
            className={`h4 mb-4 ${
              {
                0: "text-color-1",
                1: "text-color-2",
                2: "text-color-3",
              }[item.id] || ""
            }`}
          >
            {item.title}
          </h4>
          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>
          <div className="flex items-center h-[5.5rem]">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>
          <Button
            className="w-full mb-6"
            href={item.price ? "/pricing" : "mailto:info@123456.de"}
            white={!!item.price}
          >
            {item.price ? " Get Started" : "contact us"}
          </Button>
          <ul>
            {item.features.map((item, index) => (
              <li key={index} className="flex items-start border-n-6 border-t">
                <img src={check} alt="check" width={24} height={24} />
                <p className="body-2 text-n-2 ml-3">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default PricingList;
