import { useEffect } from "react";
import "./Cursor.css";

export const CustomCursor = () => {
  useEffect(() => {
    const cursorCircle = document.createElement("div");
    cursorCircle.classList.add("custom-cursor");
    document.body.appendChild(cursorCircle);

    // Move cursor
    const moveCursor = (e) => {
      cursorCircle.style.left = `${e.clientX}px`;
      cursorCircle.style.top = `${e.clientY}px`;
    };

    // Hover effect
    const handleHover = (e) => {
      if (
        e.target.closest("a") ||
        e.target.closest("button") ||
        e.target.closest("input") ||
        e.target.closest("textarea")
      ) {
        cursorCircle.classList.add("hovered");
      } else {
        cursorCircle.classList.remove("hovered");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);
    window.addEventListener("mouseout", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
      window.removeEventListener("mouseout", handleHover);
      document.body.removeChild(cursorCircle);
    };
  }, []);

  return null;
};
