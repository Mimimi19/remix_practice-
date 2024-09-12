import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Counter } from "~/components/Counter.js";
import { Heading } from "~/components/Heading.js";
import { ListItem } from "~/components/ListItem.js";
import { Paragraph } from "~/components/Pragraph.js";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const handClick = () => console.log("押されました");
  return (
    <div className="font-sans p-4">
      <h1 className="font-bold text-2lx">remixであそぼ</h1>
      <p className="font-bold text-2lx">remixの練習をしています。</p>
      <Heading Theme="blue">remixであそぼ</Heading>
      <Paragraph>remixの練習をしています。</Paragraph>
      <Heading>元気</Heading>
      <Paragraph>ほんまでっか</Paragraph>

      <button
        onClick={handClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        推してね！
      </button>
      <Counter />
      <ul>
        <ListItem>
          <Link to="/home">home</Link>
        </ListItem>
        <button className="bg-slate-900 text-white px-4  border "></button>
      </ul>
    </div>
  );
}
