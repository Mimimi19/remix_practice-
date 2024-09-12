type Theme = "red" | "blue" | "green";

interface HeadingProps {
  children: React.ReactNode;
  Theme?: Theme;
}

export const Heading = (props: HeadingProps) => {
  let themeCN = "";
  switch (props.Theme) {
    case "red":
      themeCN = "text-red-500";
      break;
    case "blue":
      themeCN = "text-blue-500";
      break;
    case "green":
      themeCN = "text-green-500";
      break;
    default:
      themeCN = "text-black";
      break;
  }
  return <h1 className={"font-bold text-2lx " + themeCN}>{props.children}</h1>;
};
