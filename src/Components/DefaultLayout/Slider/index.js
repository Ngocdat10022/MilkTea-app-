import SliderItem from "./SliderItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IConNext, IconPrev } from '../../../assets/icons'

function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <IConNext
            style={{ ...style, display: "block", position: 'absolute', color: '#fff', }}
            onClick={onClick}
        />
    );
}
function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
        <IconPrev
            style={{ ...style, display: "block", position: 'absolute', color: '#fff', }}
            onClick={onClick}
        />
    );
}

function Sliders({ data }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className="Wrapper-slider">
            <Slider {...settings}>
                {data.map((item, index) => {
                    return <SliderItem
                        key={index}
                        img={item.img}
                        name={item.name}
                        headding={item.headding}
                        headding1={item.headding1}
                        text={item.text}
                        text1={item.text1}
                        Button={item.Button}
                        childrenBtn={item.childrenBtn}
                        styleBtn={item.styleBtn}
                        sizeBtn={item.sizeBtn}
                        to={item.to}
                    />
                })}

            </Slider>
        </div>
    );
}

export default Sliders;