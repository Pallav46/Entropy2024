import Trailer from "./pages/Home/Trailer/Trailer";
import Cursor from "./pages/Home/Cursor/Cursor";
import Hero from "./pages/Home/Hero/Hero";
import Merch from "./pages/Home/Merch/Merch";

function App() {
  return (
    <>
      <div className="stars">
        <div className="stars1"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      <Hero />
      <Cursor />
      <Trailer />
      <Merch />
    </>
  );
}

export default App;
