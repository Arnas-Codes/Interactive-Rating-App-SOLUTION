import { Routes, Route } from "react-router-dom";
import Rating from "./components/Rating";
import Review from "./components/Review";

function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-grey-950 text-white">
      <Routes>
        <Route path="/" element={<Rating />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </div>
  );
}

export default App;