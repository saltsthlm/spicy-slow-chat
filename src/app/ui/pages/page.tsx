import { ReactNode } from "react";
import { Main } from "./main";

type Props = {
  title: string;
  children: ReactNode;
};
export function Page({ children, title }: Props) {
  return (
    <Main>
      <PageTitle title={title}> </PageTitle>
      {children}
    </Main>
  );
}
