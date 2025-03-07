import { NavLink } from "react-router";

export default function NavMenu() {
  return (
    <div className="text-2xl font-serif flex gap-5 dark:text-wine">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "decoration-bistre dark:decoration-wine underline" : ""
        }
        viewTransition
      >
        {" "}
        Home
      </NavLink>
      <NavLink
        to="about"
        className={({ isActive }) =>
          isActive ? "decoration-bistre dark:decoration-wine underline" : ""
        }
        viewTransition
      >
        {" "}
        About
      </NavLink>
      <NavLink
        to="contact"
        className={({ isActive }) =>
          isActive ? "decoration-bistre dark:decoration-wine underline" : ""
        }
        viewTransition
      >
        {" "}
        Contact
      </NavLink>
    </div>
  );
}
