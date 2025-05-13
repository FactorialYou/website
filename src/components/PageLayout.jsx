import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import Header from "./Header";
import JumpToTop from "./JumpToTop";

const PageLayout = ({ config }) => {

    const getClassNames = () => {

        let classNames = ["page-body"]

        if (config.path === "/") {
            classNames.push("home")
        }

        else if (config.parent === "ROOT"){
            classNames.push("not-found")
        }
        
        else {
            classNames.push("container")
        }

        return classNames.join(" ")

    }

    

    return (

            <div className="page">

                <Header/>
                <Breadcrumbs config={config} show={config.parent !== "ROOT"} />

                <section className={getClassNames()} data-aos="fade-up">

                        <div className="section-title" hidden={config.parent === "ROOT"}>
                            <h2>{config.title}</h2>
                        </div>

                        {config.component}

                </section>

                <Footer/>
                <JumpToTop/>

            </div>

    );
};

export default PageLayout;