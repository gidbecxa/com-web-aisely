import { useEffect, useState } from "react";

export function Header() {
  const [background, setBackground] = useState(false);

  const handleScroll = (e) => {
    return e.target.scrollTop > 100
      ? setBackground(true)
      : setBackground(false);
  };
  useEffect(() => {
    document.querySelector("#main").addEventListener("scroll", handleScroll);
    return () =>
      document
        .querySelector("#main")
        .removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed w-full top-0 py-4 bg-white z-50 ${
        background ? "bg-white" : "bg-inherit"
      } `}
    >
      <nav className="flex items-center justify-between max-w-screen-lg mx-auto px-6 lg:px-6 xl:px-0">
        <a href="/" className="flex items-center">
          <img
            src="static/images/aisley11-op.png"
            className="h-7 md:h-12 w-auto"
          />
        </a>
        <ul className="md:flex items-center text-xs sm:text-sm">
          <li className="ml-2 bg-ydgreen text-white p-2 rounded-sm">
            <a href="#become_our_pilot_customer">Become our pilot customer</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
