import { PAGES } from "../configs/pages";

const InlinePageLink = ({ title }) => {

    const containerStyle = {
        border: '1px solid var(--bs-purple)',
        borderRadius: "5px",
        color: "var(--bs-purple)"
    };

    const linkStyle = {
        color: "var(--bs-purple)",
        display: 'inline-flex',
        alignItems: 'center'
    }

    const iconStyle = {
        width: '1em',
        height: '1em',
        verticalAlign: 'middle',
        marginLeft: '0.25rem',
        fill: 'currentColor',
        display: 'inline-block',
    };

    return (
        <span className="p-1" style={containerStyle}>
            <a href={PAGES.find(page => page.title === title)?.path} style={linkStyle} target="_blank">
                <span>{title}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="icon"
                    style={iconStyle}
                >
                    <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42L17.59 5H14V3z" />
                    <path d="M5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7H5V5z" />
                </svg>
            </a>
        </span>
    );
};

export default InlinePageLink;