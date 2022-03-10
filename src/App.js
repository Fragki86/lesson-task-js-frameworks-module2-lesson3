import GameList from "./components/GameList";
import GameDetail from "./components/GameDetail";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GameList />} />
        <Route path="/game/:slug" element={<GameDetail />} />
          
      </Routes>
    </Router>
  );
}

export default App;
