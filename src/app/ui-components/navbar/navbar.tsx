import Link from "next/link";

const NavItems = [
  { name: "Statistics", href: "/statistic" },
  { name: "Button", href: "/button" },
];
export function SideNavbar() {
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
