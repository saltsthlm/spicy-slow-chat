import Link from "next/link";

const NavItems = [
  { name: "Login", href: "/login-page" },
  { name: "Statistics", href: "/statistic" },
];
export function Navbar() {
  return (
    <ul className="bg-gray-300 flex space-x-4">
      {NavItems.map((navItem, index) => {
        return (
          <li key={index}>
            <Link href={navItem.href}>{navItem.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}
