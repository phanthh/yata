import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="m-auto max-w-screen-sm flex flex-col justify-start items-center">
      {children}
    </div>
  );
}
