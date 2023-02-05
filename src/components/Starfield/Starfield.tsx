import React, { useRef, useEffect } from "react";
import { Theme } from "../../styles/theme";

import * as S from "./Starfield.styles";

interface Star {
  x: number;
  y: number;
  z: number;
  move: () => void;
  show: () => void;
}

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const c = canvas.getContext("2d")!;
    cRef.current = c;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const numStars = 700;
    const stars: Star[] = [];
    const size = 0.4;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const speed = 0.5;

    for (let i = 0; i < numStars; i++) {
      stars.push(createStar());
    }

    function createStar(): Star {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * canvas.width,
        move: function () {
          this.z = this.z - speed;
          if (this.z <= 0) {
            this.z = canvas.width;
          }
        },
        show: function () {
          let x, y, s;
          x = (this.x - centerX) * (canvas.width / this.z);
          x = x + centerX;

          y = (this.y - centerY) * (canvas.width / this.z);
          y = y + centerY;

          s = size * (canvas.width / this.z);
          if (cRef.current) {
            cRef.current.beginPath();
            cRef.current.fillStyle = "white";
            cRef.current.arc(x, y, s, 0, Math.PI * 2);
            cRef.current.fill();
          }
        },
      };
    }

    function draw() {
      if (cRef.current) {
        cRef.current.fillStyle = `${Theme.colors.background}`;
        cRef.current.fillRect(0, 0, canvas.width, canvas.height);
      }
      for (let i = 0; i < numStars; i++) {
        stars[i].show();
        stars[i].move();
      }
    }

    function update() {
      draw();
      window.requestAnimationFrame(update);
    }

    update();
  }, []);

  return <S.Canvas ref={canvasRef} />;

  //  credit https://codesandbox.io/s/5wwoqr3j24?file=/src/styles.css
};

export default Starfield;
