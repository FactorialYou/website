
import HomePage from "../page/HomePage";
import ContactUsPage from "../page/ContactUsPage";
import CoachingPage from "../page/CoachingPage";
import WorkshopPage from "../page/WorkshopPage";
import NotFoundPage from "../page/NotFound";
import CompoundInterestCalculatorPage from "../page/tools/CompoundInterestCalculatorPage";
import ToolsPage from "../page/ToolsPage";
import ArticlesPage from "../page/ArticlesPage";
import EmergencyFundSizePage from "../page/articles/EmergencyFundSizePage";
import BudgetTemplatesPage from "../page/tools/BudgetTemplatesPage";

export const PAGES = [
    { title: "Home", component: <HomePage />, path: "/", parent: "ROOT" },
    { title: "Workshop", component: <WorkshopPage />, path: "/Workshop", parent: "ROOT" },

    { title: "Articles", component: <ArticlesPage />, path: "/Articles", parent: "ROOT" },
    { title: "Sizing your Emergency Fund", component: <EmergencyFundSizePage />, path: "/Articles/EmergecnyFundSize", parent: "ARTICLES", category: "Emergency Fund" },

    { title: "Tools", component: <ToolsPage />, path: "/Tools", parent: "ROOT" },
    { title: "Budget Templates", component: <BudgetTemplatesPage />, path: "/Tools/BudgetTemplates", parent: "TOOLS", category: "Budgeting" },
    { title: "Compound Interest Calculator", component: <CompoundInterestCalculatorPage />, path: "/Tools/CompoundInterestCalculator", parent: "TOOLS", category: "Investing" },

    { title: "Coaching", component: <CoachingPage />, path: "/Coaching", parent: "ROOT" },
    { title: "Contact Us", component: <ContactUsPage />, path: "/ContactUs", parent: "ROOT" },
    { title: "Not Found", component: <NotFoundPage />, path: "*", parent: "N/A" },
];