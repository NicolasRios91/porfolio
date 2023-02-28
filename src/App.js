import "./App.css";
import CardList from "./models/card-list";
import Footer from "./models/footer";
import Hero from "./models/hero";
import About from "./models/about";
import { Skills } from "./models/skills";
import { Form } from "./models/contact";

function App() {
  return (
    <>
      <Hero />
      <div className="App">
        <About />
        <Skills />
        <CardList />
        <Form />
      </div>
      <Footer />
    </>
  );
}

export default App;
