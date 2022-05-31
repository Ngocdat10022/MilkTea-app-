import Header from "../DefaultLayout/Header";
import Slider from '../DefaultLayout/Slider'
import Button from "../Button";
function SliderRecruit({ children }) {
    const data = [
        {
            id: 1,
            img: 'https://tocotocotea.com/wp-content/uploads/2021/12/about-banner-main.png ',
            name: "Cơ hội nghề nghiệp",
            headding: "Trở thành thành viên trong",
            headding1: "  gia đình ToCoToCo Tea",
            Button: Button,
            childrenBtn: "các vị trí hiện tại",
            styleBtn: "btn--main",
            sizeBtn: "btn--large",
            to: ''
        },
        {
            id: 2,
            img: 'https://tocotocotea.com/wp-content/uploads/2021/12/slideshow1_1.jpg',
            name: "Cơ hội nghề nghiệp",
            headding: "Trở thành thành viên trong",
            headding1: "  gia đình ToCoToCo Tea",
            Button: Button,
            childrenBtn: "các vị trí hiện tại",
            styleBtn: "btn--main",
            sizeBtn: "btn--large",
            to: ''

        },

    ]
    return (
        <div className="wrapper-dflo">
            <Header />
            <Slider data={data} />
            <div className="container">
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}
export default SliderRecruit;
