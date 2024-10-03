import { ReactNode } from "react";

function Container({
  children = null,
  cls = "",
}: {
  children: ReactNode;
  cls?: string;
}) {
  return (
    <div className={`relative flex  max-w-[1252px] ${cls}`}>{children}</div>
  );
}

export { Container };
