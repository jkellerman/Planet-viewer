import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { COLORS } from "../utils/variables";

const Starfield = () => {
  const canvasRef = useRef(null);
  const cRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");
    cRef.current = c;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const numStars = 700;
    const stars = [];
    const size = 0.4;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const speed = 0.5;

    for (let i = 0; i < numStars; i++) {
      stars.push(createStar());
    }

    function createStar() {
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

          cRef.current.beginPath();
          cRef.current.fillStyle = "white";
          cRef.current.arc(x, y, s, 0, Math.PI * 2);
          cRef.current.fill();
        },
      };
    }

    function draw() {
      cRef.current.fillStyle = `${COLORS.background}`;
      cRef.current.fillRect(0, 0, canvas.width, canvas.height);
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

  return <StyledCanvas ref={canvasRef} />;

  //  credit https://codesandbox.io/s/5wwoqr3j24?file=/src/styles.css
};

const StyledCanvas = styled.canvas`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default Starfield;
