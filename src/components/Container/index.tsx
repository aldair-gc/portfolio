import { HTMLAttributes, PropsWithChildren } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  closing?: "curlyBrace" | "squareBrace" | "parenthesis" | "none";
  shadow?: boolean;
  background?: boolean;
}

export function Container({
  closing = "none",
  shadow = true,
  background = true,
  children,
  ...rest
}: PropsWithChildren<Props>) {
  const CLOSING = {
    curlyBrace: [<>&#123;</>, <>&#125;</>],
    squareBrace: [<>&#91;</>, <>&#93;</>],
    parenthesis: [<>&#40;</>, <>&#41;</>],
    none: [<></>, <></>],
  };

  return (
    <div {...rest}>
      <div className="flex">
        <p className="text-3xl sm:text-4xl text-primary-400 dark:text-primary-400">{CLOSING[closing][0]}</p>
        <div
          className={`flex p-4 ${background && "bg-primary-300 dark:bg-primary-600 w-full"} flex-col ${
            shadow && "shadow-2xl"
          }`}
        >
          {children}
        </div>
        <p className="self-end text-3xl sm:text-4xl text-primary-400 dark:text-primary-400">{CLOSING[closing][1]}</p>
      </div>
    </div>
  );
}
