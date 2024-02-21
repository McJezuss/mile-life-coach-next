import { FC } from "react";

interface DividerProps {
  orientation: "horizontal" | "vertical";
}

export const Divider: FC<DividerProps> = (props) => {
  const { orientation } = props;

  if (orientation === "vertical") {
    return <div className="h-8 w-px bg-gray-300 dark:bg-gray-700" />;
  } else {
    return <div className="h-px w-8 bg-gray-300 dark:bg-gray-700" />;
  }
};
