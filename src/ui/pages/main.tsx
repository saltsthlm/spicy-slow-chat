import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export function Main({ children }: Props) {
  return (
    <>
      <main className="h-screen max-w-screen-sm m-auto flex flex-col items-center py-4">
        {children}
      </main>
    </>
  );
}
