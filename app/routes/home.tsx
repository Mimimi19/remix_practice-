import { Link, Outlet } from "@remix-run/react";
import { ListItem } from "~/components/ListItem.js";

export default function Home() {
  return (
    <div className="p-4">
      <div className="flex flex-row gap-4">
        <ListItem>
          <Link to="/">default</Link>
        </ListItem>
        <ListItem>
          <Link to="/home">home</Link>
        </ListItem>
        <ListItem>
          <Link to="/home/google_map">map</Link>
        </ListItem>
      </div>
      <Outlet />
    </div>
  );
}
