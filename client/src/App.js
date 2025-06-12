import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { lightTheme } from "./utils/Themes";
import { BrowserRouter } from "react-router-dom";
import Authentication from "./pages/Authentication";
import { useState } from "react";
import Navbar from "./components/Navbar";

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
            <Container>
              
              <Navbar />
            </Container>
          ) : (<Container>
            <Authentication /></Container>
          )}
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
