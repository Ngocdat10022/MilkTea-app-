
function SliderItem({ img, name, headding, headding1, text, text1, Button, childrenBtn, styleBtn, sizeBtn, to }) {
    return (
        <div className="siler-slick-wrapper">
            <div className="slider-item">
                <img className="slider-img" src={img} alt="slider" />
                <div className="carousel-bg "></div>
                <div className="item-content">
                    <h3 className="text-one">{name}</h3>
                    <h3 className="text-two">{headding}<br />{headding1}</h3>
                    <h3 className="text-three">
                        {text} <br /> {text1}</h3>
                    <Button to={to} children={childrenBtn} buttonstyle={styleBtn} buttonsize={sizeBtn} />
                </div>
            </div>
        </div>
    );
}
export default SliderItem;