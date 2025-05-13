import { PAGES } from "../configs/pages";

export default function ArticlesPage() {

    const articles = PAGES.filter(page => page.parent === "Articles").reduce((acc, page) => {
        const key = page.category;
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(page);
        return acc;
    }, {});

    return (
        Object.entries(articles).map(([category, items]) => (
            <div key={category} className="my-4">
                <h2 className="fs-3 mb-2">{category}</h2>
                <hr className="border border-dark border-1 opacity-100" />
                <div className="workshop-grid">
                    {items.map((tool) => (
                        <a className="fs-5 outline-badge-theme hoverable" href={tool.path}>
                            {tool.title}
                        </a>
                    ))}
                </div>
            </div>
        ))
    )
}