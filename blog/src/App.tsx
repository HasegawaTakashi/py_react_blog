import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Article from './components/Article';
import Genre from './components/Genre';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genre/:genre" element={<Genre />} />
        <Route path="/articles/:genre/:filename" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
