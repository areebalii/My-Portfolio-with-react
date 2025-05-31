import { useEffect } from "react";
import "./Cursor.css";

export const CustomCursor = () => {
  useEffect(() => {
    const cursorCircle = document.createElement("div");
    cursorCircle.classList.add("custom-cursor");
    document.body.appendChild(cursorCircle);

    const moveCursor = (e) => {
      cursorCircle.style.left = `${e.clientX}px`;
      cursorCircle.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeChild(cursorCircle);
    };
  }, []);

  return null;
};
