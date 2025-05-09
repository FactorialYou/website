import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { PAGES } from './configs/pages';

function App() {

  return (
    <div id="app">
      <Router>
        <Header/>
        <Routes>
          {PAGES.map(nav => <Route path={nav.path} element={nav.component} />)}
        </Routes>
        <Footer />
        <a href="#" class="back-to-top d-flex align-items-center justify-content-center active">
          <box-icon name="chevron-up" type="solid" color="white" size="md"></box-icon>
        </a>
        <div id="preloader"></div>
      </Router>
    </div>

  );
}

export default App;
