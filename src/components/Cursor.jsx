import React, { useEffect, useState, useRef } from "react";

export default function Cursor() {
    const [isMouseActive, setIsMouseActive] = useState(false);

    const cursorRef = useRef(null);
    const cursorInnerRef = useRef(null);


    useEffect(() => {
        const checkMouseStatus = () => {
          setIsMouseActive(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
        };
    
        checkMouseStatus(); // Initial check
    
        const handleMouseMove = (e) => {
          if (isMouseActive) {
            const x = e.clientX;
            const y = e.clientY;
    
            if (cursorRef.current && cursorInnerRef.current) {
              cursorRef.current.style.transform = `translate3d(calc(${x}px - 25px), calc(${y}px - 25px), 0)`;
              cursorInnerRef.current.style.left = x + "px";
              cursorInnerRef.current.style.top = y + "px";
            }
          }
        };
    
        const handleMouseDown = () => {
          if (isMouseActive) {
            if (cursorRef.current && cursorInnerRef.current) {
              cursorRef.current.classList.add("click");
              cursorInnerRef.current.classList.add("cursorinnerhover");
            }
          }
        };
    
        const handleMouseUp = () => {
          if (isMouseActive) {
            if (cursorRef.current && cursorInnerRef.current) {
              cursorRef.current.classList.remove("click");
              cursorInnerRef.current.classList.remove("cursorinnerhover");
            }
          }
        };
    
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("resize", checkMouseStatus);
    
        return () => {
          // Clean up event listeners when the component unmounts
          window.removeEventListener("mousemove", handleMouseMove);
          window.removeEventListener("mousedown", handleMouseDown);
          window.removeEventListener("mouseup", handleMouseUp);
          window.removeEventListener("resize", checkMouseStatus);
        };
      }, [isMouseActive]);

    return (
        <>
            {isMouseActive && (
                <>
                    <div className="cursor" ref={cursorRef}></div>
                    <div className="cursor2" ref={cursorInnerRef}></div>
                </>
            )}
        </>
    );
}

