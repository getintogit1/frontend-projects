import { Link } from "react-router-dom";

const base = import.meta.env.BASE_URL;
const items = [
  { to: "/tutorial", title: "Tutorial", img: `${base}tutorial.png` },
  { to: "/easylearn", title: "EasyLearn", img: `${base}easylearn.png` },
  { to: "/portfolio", title: "Portfolio", img: `${base}portfolio.png` },
  { to: "/robot", title: "Robot", img: `${base}robot.png` },
];

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-white">
      <div className="grid gap-6 sm:grid-cols-3 w-full max-w-5xl">
        {items.map((it) => (
          <Link
            key={it.to}
            to={it.to}
            className="group rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={it.img}
                alt={it.title}
                className="w-full h-full object-cover group-hover:scale-105 transition overflow-hidden"
              />
            </div>
            <div className="p-4 text-lg font-semibold">{it.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
