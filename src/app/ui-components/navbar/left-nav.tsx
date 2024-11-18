import Link from "next/link";

const NavItems = [
  { name: "login", href: "/login-page", subpage: "" },
  { name: "Chat", href: "/chat", subpage: "" },
  { name: "Statistics", href: "/statistic", subpage: "" },
  { name: "Button", href: "/design-system/button", subpage: "/info" },
  { name: "Form", href: "/design-system/form", subpage: "/info" },
];
export function LeftNav() {
  return (
    <ul className=" flex flex-col">
      {NavItems.map((navItem, index) => {
        return (
          <li
            className="p-2 m-1 rounded-lg font-bold  hover:text-gray-300
 "
            key={index}
          >
            <Link href={navItem.href}>{navItem.name}</Link>
            <strong className="ml-6 flex ">
              <Link href={`${navItem.href}/${navItem.subpage}`}>
                {navItem.subpage}
              </Link>
            </strong>
          </li>
        );
      })}
    </ul>
  );
}
