import { ReactNode } from "react";
import { Main } from "./main";
import { PageTitle } from "./page-title";

type Props = {
  title: string;
  children: ReactNode;
};
export function Page({ children, title }: Props) {
  return (
    <Main>
      <PageTitle title={title} />
      {children}
    </Main>
  );
}
