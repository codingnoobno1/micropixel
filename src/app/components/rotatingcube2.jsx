"use client";

import styled from "styled-components";

export default function RotatingCube({ sidebar }) {
  return (
    <CubeContainer sidebar={sidebar}>
      <Cube>
        <CubeFace className="front">PIXEL</CubeFace>
        <CubeFace className="back">CODE</CubeFace>
        <CubeFace className="left">HIVE</CubeFace>
        <CubeFace className="right">
          <img src="/pixel.jpg" alt="Pixel Logo" />
        </CubeFace>
        <CubeFace className="top">TOP</CubeFace>
        <CubeFace className="bottom">BOTTOM</CubeFace>
      </Cube>
    </CubeContainer>
  );
}

// 🔹 Styled Components
const CubeContainer = styled.div`
  width: 200px;
  height: 200px;
  perspective: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  transform: ${({ sidebar }) => (sidebar ? "scale(2)" : "scale(2)")};
`;

const Cube = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  transform-style: preserve-3d;
  animation: rotate3D 5s infinite linear;
  transform-origin: center;

  @keyframes rotate3D {
    from { transform: rotateX(0deg) rotateY(0deg); }
    to { transform: rotateX(360deg) rotateY(360deg); }
  }
`;

const CubeFace = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid cyan;
  box-shadow: 0px 5px 10px rgba(0, 255, 255, 0.5);
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: cyan;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Properly positioned cube faces */
  &.front  { transform: rotateY(0deg) translateZ(50px); }
  &.back   { transform: rotateY(180deg) translateZ(50px); }
  &.left   { transform: rotateY(-90deg) translateZ(50px); }
  &.right  { transform: rotateY(90deg) translateZ(50px); }
  &.top    { transform: rotateX(90deg) translateZ(50px); }
  &.bottom { transform: rotateX(-90deg) translateZ(50px); }

  img {
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
`;
