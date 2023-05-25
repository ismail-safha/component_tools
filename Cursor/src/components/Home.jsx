import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

export default function Home() {
  const { mouseEntererHandler, mouseLeaverHandler } = useContext(CursorContext);
  return (
    <div className="w-full h-screen ">
      <div className="">home</div>
      <ul onMouseEnter={mouseEntererHandler} onMouseLeave={mouseLeaverHandler}>
        <li>
          <a href="#">Link</a>
        </li>
      </ul>
    </div>
  );
}
