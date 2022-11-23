import "./App.css";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="profile/*" element={<Profile />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
