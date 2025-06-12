import { ThemeProvider } from "styled-components";
import styled from "styled-components"; // ✅ this line was missing
import { lightTheme } from "./utils/Themes";
import { BrowserRouter } from "react-router-dom";
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
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Container>
        <Authentication></Authentication>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
