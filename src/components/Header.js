
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PAGES } from '../App';

const Header = () => {

    const location = useLocation();
    const [activeTab, setActiveTab] = useState()

    useEffect(() => {
        if (PAGES.filter(page => page.path == location.pathname).length === 1){
            setActiveTab(PAGES.filter(page => page.path == location.pathname)[0].index)
        }
    }, [location]);

    return (
        <header id="header" class="fixed-top header-scrolled">
            <div class="container d-flex align-items-center justify-content-between">
                <h1 class="logo"><a href="/">FactorialYou</a></h1>

                <nav id="navbar" class="navbar">
                    <ul>
                        {PAGES.filter(page => page.isTab).map(page => {
                            let className = (activeTab === page.index) ? "nav-link active" : "nav-link"
                            return <li><a className={className} href={page.path}>{page.label}</a></li>
                        })}
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </div>
        </header>
    )
};

export default Header;