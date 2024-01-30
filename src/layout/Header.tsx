import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { clsx } from "clsx";

const Header = () => {
  const [showBorder, setShowBorder] = useState(false);
  useEffect(() => {
    const checkScroll = () => setShowBorder(() => window.scrollY > 15);

    window.addEventListener("scroll", checkScroll);

    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const containerClasses = clsx([
    "sticky top-0 border-b bg-neutral-100/80 backdrop-blur-sm dark:bg-neutral-800/80",
    {
      "border-neutral-300 dark:border-neutral-600": showBorder,
      "border-transparent": !showBorder,
    },
    "w-full transition-all duration-300 ease-in-out",
  ]);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    clsx([
      "transform underline underline-offset-0 transition-all duration-300 hover:underline hover:underline-offset-4",
      {
        "decoration-sky-300 underline-offset-4": isActive,
        "decoration-transparent hover:decoration-sky-300": !isActive,
      },
    ]);

  const routes = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
  ];

  return (
    <div className={containerClasses}>
      <div className={"container mx-auto my-5"}>
        <nav className={"flex items-center gap-5"}>
          <h1 className={"animate-pulse text-start text-2xl font-black"}>
            My Brand
          </h1>
          {routes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={navLinkClasses}>
              {route.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
