import Container from "react-bootstrap/Container";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";

function App() {
  return (
    <Container>
      <Header />
      <CardContainer />
      {/* <WordsCard /> */}
    </Container>
  );
}

export default App;
