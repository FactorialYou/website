
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
import DebtPayoffCalculator from "../page/tools/DebtPayoffCalculator";
import BehaviorActionPlan from "../page/tools/BehaviorActionPlan";
import BudgetCrafter from "../page/tools/BudgetCrafter";
import EmergencyFundBuilder from "../page/tools/EmergencyFundBuilder";
import LifeInsurancePlanner from "../page/tools/LifeInsurancePlanner";
import DebtPayoffPlanner from "../page/tools/DebtPayoffPlanner";
import HomePurchaseBudgetPlanner from "../page/tools/HomePurchaseBudgetPlanner";

export const PAGES = [
    { title: "Home", component: <HomePage />, path: "/", parent: "ROOT" },
    { title: "Workshop", component: <WorkshopPage />, path: "/Workshop", parent: "Home" },

    { title: "Articles", component: <ArticlesPage />, path: "/Articles", parent: "Home" },
    { title: "Sizing your Emergency Fund", component: <EmergencyFundSizePage />, path: "/Articles/EmergecnyFundSize", parent: "Articles", category: "Emergency Fund" },

    { title: "Tools", component: <ToolsPage />, path: "/Tools", parent: "Home" },
    { title: "Behavioral Action Plan", component: <BehaviorActionPlan />, path: "/Tools/BehavioralActionPlan", parent: "Tools", category: "Behavior" },
    { title: "Budget Crafter", component: <BudgetCrafter />, path: "/Tools/BudgetCrafter", parent: "Tools", category: "Budgeting" },
    { title: "Budget Templates", component: <BudgetTemplatesPage />, path: "/Tools/BudgetTemplates", parent: "Tools", category: "Budgeting" },
    { title: "Debt Payoff Calculator", component: <DebtPayoffCalculator />, path: "/Tools/DebtPayoffCalculator", parent: "Tools", category: "Debt" },
    { title: "Debt Payoff Planner", component: <DebtPayoffPlanner />, path: "/Tools/DebtPayoffPlanner", parent: "Tools", category: "Debt" },
    { title: "Emergency Fund Builder", component: <EmergencyFundBuilder />, path: "/Tools/EmergencyFundBuilder", parent: "Tools", category: "Emergency Fund" },
    { title: "Life Insurance Planner", component: <LifeInsurancePlanner />, path: "/Tools/LifeInsurancePlanner", parent: "Tools", category: "Insurance" },
    { title: "Home Purchase Budget Planner", component: <HomePurchaseBudgetPlanner />, path: "/Tools/HomePurchaseBudgetPlanner", parent: "Tools", category: "Home Ownership" },
    { title: "Compound Interest Calculator", component: <CompoundInterestCalculator />, path: "/Tools/CompoundInterestCalculator", parent: "Tools", category: "Investing" },

    { title: "Coaching", component: <CoachingPage />, path: "/Coaching", parent: "Home" },
    { title: "Contact Us", component: <ContactUsPage />, path: "/ContactUs", parent: "Home" },
    { title: "Not Found", component: <NotFoundPage />, path: "*", parent: "ROOT" },
];