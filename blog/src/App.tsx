import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Article from './components/Article';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:filename" element={<Article />} />
      </Routes>
    </BrowserRouter>
  //   <div className="App">
  //     <Navbar />
  //     <main>
  //       <Home />
  //     </main>
  //   </div>
  );
};

export default App;
