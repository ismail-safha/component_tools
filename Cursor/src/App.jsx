import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "./context/CursorContext";
import Header from "./components/Header";
import Home from "./components/Home";

export default function App() {
  const { curseorVariants, cursorBG } = useContext(CursorContext);

  return (
    <div>
      <Header />
      <Home />
      {/* cursor */}
      <motion.div
        variants={curseorVariants}
        animate={cursorBG}
        className="w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full"
      ></motion.div>
    </div>
  );
}
