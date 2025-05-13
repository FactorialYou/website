
import HomePage from "../page/HomePage";
import ContactUsPage from "../page/ContactUsPage";
import CoachingPage from "../page/CoachingPage";
import WorkshopPage from "../page/WorkshopPage";
import NotFoundPage from "../page/NotFound";
import CompoundInterestCalculator from "../page/tools/CompoundInterestCalculator";
import ToolsPage from "../page/ToolsPage";
import ArticlesPage from "../page/ArticlesPage";
import EmergencyFundSizePage from "../page/articles/EmergencyFundSizePage";
import BudgetTemplatesPage from "../page/tools/BudgetTemplatesPage";

export const PAGES = [
    { title: "Home", component: <HomePage />, path: "/", parent: "ROOT" },
    { title: "Workshop", component: <WorkshopPage />, path: "/Workshop", parent: "Home" },

    { title: "Articles", component: <ArticlesPage />, path: "/Articles", parent: "Home" },
    { title: "Sizing your Emergency Fund", component: <EmergencyFundSizePage />, path: "/Articles/EmergecnyFundSize", parent: "Articles", category: "Emergency Fund" },

    { title: "Tools", component: <ToolsPage />, path: "/Tools", parent: "Home" },
    { title: "Budget Templates", component: <BudgetTemplatesPage />, path: "/Tools/BudgetTemplates", parent: "Tools", category: "Budgeting" },
    { title: "Compound Interest Calculator", component: <CompoundInterestCalculator />, path: "/Tools/CompoundInterestCalculator", parent: "Tools", category: "Investing" },

    { title: "Coaching", component: <CoachingPage />, path: "/Coaching", parent: "Home" },
    { title: "Contact Us", component: <ContactUsPage />, path: "/ContactUs", parent: "Home" },
    { title: "Not Found", component: <NotFoundPage />, path: "*", parent: "ROOT" },
];