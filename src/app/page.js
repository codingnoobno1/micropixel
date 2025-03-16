"use client";

import { Box, Typography } from "@mui/material";
import Sidebar from "./components/Sidebar";
import RotatingCube from "./components/RotatingCube";
import styled from "styled-components";

export default function Page() {
  return (
    <Box sx={layoutStyle}>
      <Sidebar />

      {/* Large Rotating Cube */}
      <CubeWrapper>
        <RotatingCube large={true} />
      </CubeWrapper>

      {/* Home Section */}
      <Section id="home" $bgType="image">
        <Typography variant="h3" sx={sectionTitleStyle}>
          🏠 Home
        </Typography>
        <Typography sx={sectionContentStyle}>Welcome to CodeHive</Typography>
      </Section>
    </Box>
  );
}

// Layout Styling
const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "100vh",
  overflowX: "hidden",
  paddingLeft: "100px",
  backgroundColor: "#000",
  position: "relative",
};

// Large Cube Positioned Over Background
const CubeWrapper = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: 400px;
  z-index: 3;

  & > * {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    top: 7%;
  }
`;

// Full-Height Section with Dynamic Background
const Section = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  position: relative;

  background: ${({ $bgType }) =>
    $bgType === "image"
      ? "url('/background.jpg') center/cover no-repeat"
      : "#fff"};
`;

// Section Title Styling
const sectionTitleStyle = {
  color: "#00eaff",
  fontWeight: "bold",
  marginBottom: "10px",
  textShadow: "0px 0px 12px rgba(0, 234, 255, 1)",
};

// Section Content Styling
const sectionContentStyle = {
  color: "#ddd",
  maxWidth: "600px",
  textShadow: "0px 0px 5px rgba(255, 255, 255, 0.3)",
};

