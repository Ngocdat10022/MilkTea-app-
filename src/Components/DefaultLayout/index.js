import Header from "./Header";
import Slider from './Slider'
import Button from "../../Components/Button"
function DefaultLayout({ children }) {
    const data = [
        {
            id: 1,
            img: 'https://tocotocotea.com/wp-content/uploads/2021/12/slideshow1_2.jpg',
            name: "Tocotoco Tea",
            headding: "Đậm vị thiên nhiên ",
            headding1: "  Trọn vị hạnh phúc ",
            text: "Với sứ mệnh mang tới niềm vui và hạnh phúc, TocoToco hy vọng sẽ tạo nên ",
            text1: "  một nét văn hóa giải trí bên cạnh ly trà sữa Ngon – sạch – tươi.            ",
            Button: Button,
            childrenBtn: "đạt hàng ngay",
            styleBtn: "btn--outline",
            sizeBtn: "btn--large",
            to: "/oder"
        },
        {
            id: 2,
            img: 'https://tocotocotea.com/wp-content/uploads/2021/12/about-banner-main.png',
            name: "Tocotoco Tea",
            headding: "Đậm vị thiên nhiên",
            headding1: "  Trọn vị hạnh phúc ",
            text: "Với sứ mệnh mang tới niềm vui và hạnh phúc, TocoToco hy vọng sẽ tạo nên",
            text1: "  một nét văn hóa giải trí bên cạnh ly trà sữa Ngon – sạch – tươi.            ",
            Button: Button,
            childrenBtn: "đạt hàng ngay",
            styleBtn: "btn--outline",
            sizeBtn: "btn--large",
            to: "/oder"
        },
        {
            id: 2,
            img: 'https://tocotocotea.com/wp-content/uploads/2021/12/slideshow1_1.jpg',
            name: "Tocotoco Tea",
            headding: "Đậm vị thiên nhiên",
            headding1: "  Trọn vị hạnh phúc ",
            text: "Với sứ mệnh mang tới niềm vui và hạnh phúc, TocoToco hy vọng sẽ tạo nên",
            text1: "  một nét văn hóa giải trí bên cạnh ly trà sữa Ngon – sạch – tươi.            ",
            Button: Button,
            childrenBtn: "đạt hàng ngay",
            styleBtn: "btn--outline",
            sizeBtn: "btn--large",
            to: "/oder"
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
export default DefaultLayout;