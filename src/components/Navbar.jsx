import Link from "next/Link";
const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/profile",
    title: "Profile",
  },
  {
    path: "/blogs",
    title: "Blogs",
  },
  {
    path: "/dashboard",
    title: "Dashboard",
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between container mx-auto">
      <h1 className="text-3xl font-semibold">Next Hero</h1>
      <ul className="flex items-center justify-between">
        {navLinks.map(({ path, title }) => (
          <li className="mx-2" key={path}>
            <Link href={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
