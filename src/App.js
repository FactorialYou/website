import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from "./page/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactUsPage from "./page/ContactUsPage";
import CoachingPage from "./page/CoachingPage";
import WorkshopPage from "./page/WorkshopPage";
import NotFoundPage from "./page/NotFound";
import CompoundInterestCalculatorPage from "./page/tools/CompoundInterestCalculatorPage";
import ToolsPage from "./page/ToolsPage";
import ArticlesPage from "./page/ArticlesPage";
import EmergecnyFundSizePage from "./page/articles/EmergecnyFundSizePage";


export const PAGES = [
  { label: "Home", component: <HomePage />, path: "/", index: 0, isTab: true},
  { label: "Workshop", component: <WorkshopPage />, path: "/Workshop", index: 1, isTab: true},

  { label: "Articles", component: <ArticlesPage />, path: "/Articles", index: 2, isTab: true},
  { label: "Emergecny Fund Size", component: <EmergecnyFundSizePage />, path: "/Articles/EmergecnyFundSize", index: -1, isTab: false},
 
  { label: "Tools", component: <ToolsPage />, path: "/Tools", index: 3, isTab: true},
  { label: "Compound Interest Calculator", component: <CompoundInterestCalculatorPage />, path: "/Tools/CompoundInterestCalculator", index: -1, isTab: false},

  { label: "Coaching", component: <CoachingPage />, path: "/Coaching", index: 4, isTab: true},
  { label: "Contact Us", component: <ContactUsPage />, path: "/ContactUs", index: 5, isTab: true},
  { label: "Not Found", component: <NotFoundPage />, path: "*", index: -1, isTab: false},
];

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
