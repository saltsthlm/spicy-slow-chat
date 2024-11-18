"use client";

import Button from "../ui-components/Button";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <Button
        color={"secondary"}
        title={"Hejsan"}
        size={"full"}
        disabled={false}
        loading={false}
        onClick={function (): void {
          console.log("Hello World");
        }}
      />
      <Button
        color={"secondary"}
        title={"Deactivated"}
        size={"full"}
        disabled={true}
        loading={false}
        onClick={function (): void {
          console.log("Hello World");
        }}
      />
      <Button
        color={"secondary"}
        title={"loading hehe"}
        size={"full"}
        disabled={false}
        loading={true}
        onClick={function (): void {
          console.log("Hello World");
        }}
      />
    </div>
  );
}
