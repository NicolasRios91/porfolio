import "./App.css";
import CardList from "./models/CardList";
import banner from "./utils/images/banner1.jpg";
import Footer from "./models/Footer";
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={banner} className="bannerImg" />
      </div>
      <div className="card-list">
        <CardList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
