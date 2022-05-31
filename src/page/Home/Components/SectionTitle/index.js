function SectionTitle({ title, headding }) {
    return (
        <div className="positions">
            <p className="positions-title">{title}</p>
            <h3 className="positions-headding">{headding}</h3>
            <div className="positions-icon-bottom"></div>
        </div>
    );
}

export default SectionTitle;