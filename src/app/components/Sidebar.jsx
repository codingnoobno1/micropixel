"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import RotatingCube from "./RotatingCube";
import styled from "styled-components";

const routes = [
  { path: "/", title: "🏠 Home" },
  { path: "/events", title: "📅 Events" },
  { path: "/projects", title: "💻 Projects" },
  { path: "/quizzes", title: "🧠 Quizzes" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <SidebarContainer
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <motion.div
        animate={{ width: isOpen ? 240 : 80 }}
        transition={{ duration: 0.3 }}
        className="sidebar"
      >
        {/* ✅ Pass transient prop `$isOpen` to avoid DOM warnings */}
        <CubeWrapper $isOpen={isOpen}>
          <RotatingCube $sidebar={isOpen} />
        </CubeWrapper>

        <NavList>
          {routes.map(({ path, title }) => (
            <NavItem key={path} onClick={() => router.push(path)}>
              {title}
            </NavItem>
          ))}
        </NavList>
      </motion.div>
    </SidebarContainer>
  );
}

// 🛠️ Styled Components (Fixed)

const SidebarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 100;
  display: flex;
  align-items: center;
  padding: 10px;

  .sidebar {
    background: #111;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0px 4px 10px rgba(0, 255, 255, 0.3);
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    .sidebar {
      height: 95%;
      width: 70px !important;
    }
  }
`;

const CubeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ $isOpen }) => ($isOpen ? "20px 0" : "10px 0")};
  transform: ${({ $isOpen }) => ($isOpen ? "scale(1)" : "scale(0.7)")};
  transition: transform 0.3s ease-in-out;
`;

const NavList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

const NavItem = styled.div`
  padding: 12px 20px;
  color: #0ff;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;
  text-align: center;
  width: 100%;
  border-radius: 8px;
  text-transform: uppercase;

  &:hover {
    background: rgba(0, 255, 255, 0.2);
    color: #ff4444;
    box-shadow: 0px 0px 12px cyan;
  }
`;
