import { Button, Card } from "react-bootstrap";

export default function ArticlesPage() {

    const tools = {
        // Budgeting: [
        //     { name: "Monthly Budget Planner", link: "/tools/monthly-budget" },
        //     { name: "Spending Tracker", link: "/tools/spending-tracker" },
        // ],
        "Emergency Fund": [
            { name: "Sizing your Emergency Fund", link: "/EmergecnyFundSize" },
        ],
        // Insurance: [
        //     { name: "Life Insurance Needs Estimator", link: "/tools/life-insurance" },
        //     { name: "Health Plan Comparison", link: "/tools/health-insurance" },
        // ],
    };

    return (
        <div class="page">

            <div id="breadcrumbs" class="breadcrumbs">
                <div class="d-flex justify-content-between align-items-center">
                    <ol>
                        <li><a href="/">Home</a></li>
                        <li>Articles</li>
                    </ol>
                </div>
            </div>

            <section class="section-bg h-100 pt-0">
                <div class="container" data-aos="fade-up">
                    <div class="section-title">
                        <h2>Articles</h2>
                    </div>
                    {Object.entries(tools).map(([category, items]) => (
                        <div key={category} className="my-4">
                            <h2 className="fs-3 mb-2">{category}</h2>
                            <hr className="border border-dark border-1 opacity-100"/>
                            <div className="workshop-grid">
                                {items.map((tool) => (
                                    <a className="fs-5 outline-badge-theme hoverable" href={`/Articles${tool.link}`}>
                                        {tool.name}
                                    </a>
                                    // <div  style={{width: "fiteContent"}}>
                                    //     <a href={tool.link}>{tool.name}</a>
                                    // </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}