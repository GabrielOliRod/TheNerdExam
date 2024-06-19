import React, { useState, useRef } from "react";
import styles from "./VirtualKeyboard.module.css";

const VirtualKeyboard = ({ onAction, props }) => {
  const containerRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ top: 100, left: "80vw" });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setDragging(true);
    setOffset({
      x: e.clientX - containerRef.current.offsetLeft,
      y: e.clientY - containerRef.current.offsetTop,
    });
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setPosition({
      top: e.clientY - offset.y,
      left: e.clientX - offset.x,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className={styles.keyboardContainer}
      style={{ top: position.top, left: position.left }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className={styles.keyboardTitle}>
        <h1>Keyboard (Hold and Drag)</h1>
      </div>
      <div className={styles.keyboard}>
        <section>
          <button
            className={styles.keyboardButtonSides}
            onClick={() => onAction("A")}
          >
            A
          </button>
          <button
            className={styles.keyboardButtonMiddle}
            onClick={() => onAction("HELP")}
          >
            HELP
          </button>
          <button
            className={styles.keyboardButtonSides}
            onClick={() => onAction("UP")}
          >
            ↑
          </button>
          <button
            className={styles.keyboardButtonSides}
            onClick={() => onAction("B")}
          >
            B
          </button>
          <button
            className={styles.keyboardButtonMiddle}
            onClick={() => onAction("START")}
          >
            START
          </button>
          <button
            className={styles.keyboardButtonSides}
            onClick={() => onAction("DOWN")}
          >
            ↓
          </button>
          <button
            className={styles.keyboardButtonSides}
            onClick={() => onAction("C")}
          >
            C
          </button>
          <button
            className={styles.keyboardButtonYes}
            onClick={() => onAction("YES")}
          >
            YES
          </button>
          <button
            className={styles.keyboardButtonSides}
            onClick={() => onAction("LEFT")}
          >
            ←
          </button>
          <button
            className={styles.keyboardButtonSides}
            onClick={() => onAction("D")}
          >
            D
          </button>
          <button
            className={styles.keyboardButtonNo}
            onClick={() => onAction("NO")}
          >
            NO
          </button>
          <button
            className={styles.keyboardButtonSides}
            onClick={() => onAction("RIGHT")}
          >
            →
          </button>
          <button
            className={styles.keyboardButtonSides}
            onClick={() => onAction("E")}
          >
            E
          </button>
          <button
            className={styles.keyboardButtonMiddle}
            onClick={() => onAction("SUBMIT")}
          >
            SUBMIT
          </button>
          <button
            className={styles.keyboardButtonSides}
            style={{
              fontSize: "9px",
              width: "4.35em",
              marginLeft: "10.6px",
              height: "4.2em",
            }}
            onClick={() => onAction("HOME")}
          >
            HOME
          </button>
        </section>
      </div>
    </div>
  );
};

export default VirtualKeyboard;
