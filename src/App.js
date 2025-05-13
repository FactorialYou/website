import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { PAGES } from './configs/pages';
import PageLayout from "./components/PageLayout";

function App() {

  return (
    <Router>
      <Routes>
        {PAGES.map(page => <Route path={page.path} element={<PageLayout config={page} />} />)}
      </Routes>
    </Router>
  );
}

export default App;
