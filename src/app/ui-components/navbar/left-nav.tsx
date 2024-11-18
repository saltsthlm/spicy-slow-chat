import Link from "next/link";

const NavItems = [
  // { name: "Statistics", href: "/statistic" },
  { name: "Button", href: "/button", subpage: "/info" },
];
export function LeftNav() {
  return (
    <ul className=" flex flex-col">
      {NavItems.map((navItem, index) => {
        return (
          <li
            className="p-2 m-1 rounded-lg font-bold
 "
            key={index}
          >
            <Link href={navItem.href}>{navItem.name}</Link>
            <strong className="ml-6 flex">
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
