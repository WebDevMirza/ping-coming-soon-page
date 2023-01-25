import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Card />
        <Footer />
      </div>
    </>
  );
}

export default App;
