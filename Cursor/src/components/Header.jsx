import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

export default function Header() {
  const { mouseEntererHandler, mouseLeaverHandler } = useContext(CursorContext);

  return (
    <div
      className="text-white bg-black"
      onMouseEnter={mouseEntererHandler}
      onMouseLeave={mouseLeaverHandler}
    >
      Header
    </div>
  );
}
