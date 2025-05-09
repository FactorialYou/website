import { PAGES } from "../configs/pages";

export default function ArticlesPage() {

    const articles = PAGES.filter(page => page.parent === "ARTICLES").reduce((acc, page) => {
        const key = page.category;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(page);
        return acc;
      }, {});

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
                    {Object.entries(articles).map(([category, items]) => (
                        <div key={category} className="my-4">
                            <h2 className="fs-3 mb-2">{category}</h2>
                            <hr className="border border-dark border-1 opacity-100"/>
                            <div className="workshop-grid">
                                {items.map((tool) => (
                                    <a className="fs-5 outline-badge-theme hoverable" href={tool.path}>
                                        {tool.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}