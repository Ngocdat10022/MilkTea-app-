import Banner from "./Banner";
import Header from "../DefaultLayout/Header";
function DefaultLayout({ children }) {
    return (
        <div className="wrapper-dflo">
            <Header />
            <Banner />
            <div className="container">
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}
export default DefaultLayout;