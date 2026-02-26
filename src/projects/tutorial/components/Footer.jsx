import { contactInfo, footerLists, socialIcons } from "./data.js";

const base = import.meta.env.BASE_URL;
function Footer() {
  return (
    <footer className="pt-14 pb-5 bg-white">
      <div className="container">
        {/* Footer Top */}
        <div className="grid gap-10 sm:grid-cols-2   lg:grid-cols-4">
          {/*Footer brand*/}
          {/*Links*/}
          <div className="space-y-3">
            <p className="text-lg font-semibold">Contact Info</p>

            <ul className="space-y-2.5">
              {contactInfo.map((item) => (
                <li key={item.id}>
                  <a
                    href="#"
                    className="flex items-center gap-1.5 hover:text-green-50 transition-colors"
                  >
                    <item.icon />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/*Footer list */}

          {footerLists.map((item) => (
            <div key={item.id} className="space-y-3 ">
              <p className="text-lg font-semibold">{item.title}</p>
              <ul className="space-y-2.5">
                {item.links.map((link, index) => (
                  <li
                    className="hover:text-green-50 transition-colors"
                    key={index}
                  >
                    {link.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/*Social Profile*/}

          <div>
            <p className="text-lg font-semibold">Social Profiles</p>
            <div className="flex mt-5 gap-5">
              {socialIcons.map((icon) => (
                <button className="secondary-btn p-3.5 bg-white-97 hover_bg-white-99 hover:shadow-md transition-all">
                  <a href="">{<icon.icon />}</a>
                </button>
              ))}
            </div>
          </div>
        </div>
        {/*Logo*/}
        <div className="flex items-center justify-center mt-16 ">
          <img
            src={base + "/tutorial/bird_2.jpg"}
            alt="footer logo"
            width={150}
            height={50}
          />
        </div>
        {/* Footer Bottom*/}
        <p className="text-center lg_mt-20">
          &copy; {new Date().getFullYear()} Reactdemo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
