import { NavLink } from "react-router";

export default function NavMenu() {
  return (
    <div className="text-2xl flex gap-5 dark:text-wine">
      <NavLink to="/" viewTransition>
        {" "}
        Home
      </NavLink>
      <NavLink to="about" viewTransition>
        {" "}
        About
      </NavLink>
      <NavLink to="contact" viewTransition>
        {" "}
        Contact
      </NavLink>
    </div>
  );
}
