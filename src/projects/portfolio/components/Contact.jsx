import { socialLink } from "../constant/data.js";

function Contact() {
  return (
    <section className="pt-20" id="contact">
      <div className="container grid gap-11 md:grid-cols[0.7fr_1fr] pb-12 md:pb-16 border border-zinc-100 dark:border-zinc-800 rounded-md">
        {/*Content*/}
        <div>
          <h2 className="section-title">Contact</h2>
          <p>
            Have a project in mind or just want to say hello? Feel free to reach
            out and let's create something amazing together.
          </p>

          {/*Social Links*/}
          <div className="flex items-center gap-2.5 mt-9">
            {socialLink.map((item) => (
              <a
                href="#"
                key={item.id}
                className="hover:text-emerald-600 transition-colors"
              >
                <item.icon />
              </a>
            ))}
          </div>
        </div>

        {/*Form*/}
        <form action="" className="space-y-3.5">
          {/*Wrapper*/}
          <div className="grid gap-2.5 md:grid-cols-2  ">
            {/*Input field Name*/}
            <div className=" dark:border-zinc-800 border border-zinc-300 rounded-md bg-zinc-100/60 dark:bg-zinc-900/60">
              <input
                placeholder="Name"
                type="text"
                className="py-2.5 indent-4 w-full placeholder-zinc-800 dark:placeholder-zinc-300"
              />
            </div>
            {/*Input field Email*/}
            <div className=" dark:border-zinc-800 border border-zinc-300 rounded-md bg-zinc-100/60 dark:bg-zinc-900/60">
              <input
                placeholder="Your Email"
                type="email"
                className="py-2.5  indent-4 w-full placeholder-zinc-800 dark:placeholder-zinc-300"
              />
            </div>
          </div>
          <textarea
            className="dark:border-zinc-800 border border-zinc-300 rounded-md bg-zinc-100/60 dark:bg-zinc-900/60 h-32 w-full indent-4 resize-none py-2.5 placeholder-zinc-800 dark:placeholder-zinc-300"
            placeholder="Message"
          />

          {/*Btn*/}
          <button className="bg-emerald-600 transition-colors w-full rounded-lg text-white hover:bg-emerald-800 h-12">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
