
export default function Breadcrumbs({ config, show }) {
    return (
        <div id="breadcrumbs" className="breadcrumbs" hidden={!show}>
            <ol>
                <li><a href="/">Home</a></li>
                <li hidden={config.parent === "Home"}><a href={"/" + config.parent}>{config.parent}</a></li>
                <li>{config.title}</li>
            </ol>
        </div>
    )
}