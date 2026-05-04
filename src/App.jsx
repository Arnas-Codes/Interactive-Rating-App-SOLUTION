import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Rating from "./components/Rating";
import Review from "./components/Review";

function App() {
  return (
    <Router>
      <div className="w-full h-screen flex items-center justify-center bg-grey-950 text-white">
        <Routes>
          <Route path="/" element={<Rating />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
