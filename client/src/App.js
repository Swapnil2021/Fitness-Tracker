import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { lightTheme } from "./utils/Themes";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/DashBoard";
import Workout from "./pages/Workout";
import Authentication from "./pages/Authentication";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
`;

function App() {
  const [user, setUser] = useState(true);

  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Container>
          {user ? (
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Workout" element={<Workout />} />
                
              </Routes>
            </>
          ) : (
            <Authentication />
          )}
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
