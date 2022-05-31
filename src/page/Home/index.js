import ProductsCard from "./Components/ProductsCard";
import SectionTitle from "./Components/SectionTitle";
import { ProductsHome } from "../../Data/Data.js"
import Button from "../../Components/Button";
import Grid from "../../Components/Grid";
function Home() {
    const DataHomeAboutUs = [
        {
            id: 1,
            Image: "https://www.tocotocotea.com/wp-content/themes/tocotocotea/assets/images/banner_about_us.png",
            StyleFlex: false,
            StyleBorder: false,
            StyleMargin: false,
            position: true,
            WidthWrapper: false,
            SectionTitle: "ToCoToCo Story",
            SectionHeadding: "Về chúng tôi",
            description: " Bên cạnh niềm tự hào về những ly trà sữa ngon – sạch – tươi, chúng tôi luôn tự tin mang đến khách hàng những trải nghiệm tốt nhất về dịch vụ và không gian."
        },
        {
            id: 2,
            Image: "https://www.tocotocotea.com/wp-content/themes/tocotocotea/assets/images/img_home_franchise.png",
            StyleFlex: true,
            StyleBorder: true,
            StyleMargin: true,
            position: false,
            WidthWrapper: true,
            SectionTitle: "ToCoToCo Franchise",
            SectionHeadding: "Nhượng quyền",
            description: " Gia nhập đế chế 300 TRIỆU USD. Nếu bạn bắt đầu kinh doanh khởi nghiệp ẩm thực, hoặc muốn đầu tư vào lĩnh vực này, thương hiệu TocoToco chắc chắn sẽ là một lựa chọn đáng cân nhắc cho bạn."
        }
    ]
    return (
        <>
            <div className="home-hot-product">
                <SectionTitle title="ToCoToCo Menu" headding="Sản phẩm nổi bật" />
                <div className="home-product-card">
                    <div className="list-product">
                        <Grid col={1} colgap={20} rowgap={40} smcol={2} mdcol={4} lgcol={4} xlcol={4}>
                            {ProductsHome.map((product, index) => {
                                return <ProductsCard
                                    key={product.id}
                                    tagsSale={product.tagsSale}
                                    prImage={product.prImage}
                                    PrTitle={product.PrTitle}
                                    PrPrice={product.PrPrice}
                                    PrPriceDiscount={product.PrPriceDiscount}
                                    IsDiscount={product.IsDiscount}
                                    IsNew={product.IsNew}
                                    IsSale={product.IsSale} />
                            })}
                        </Grid>
                    </div>
                    <div className="wrapper-btn-product">
                        <Button to="/oder" buttonstyle="btn--main" buttonsize="btn--large">Xem tất cả</Button>
                    </div>
                </div>
            </div>
            {DataHomeAboutUs.map((item, index) => {
                return <div key={item.id} className="home-about-us " style={item.StyleFlex ? {
                    display: "flex",
                    border: "solid 6px #d3b673",
                    marginTop: "20px",
                    marginBottom: "60px",
                    flexDirection: "row-reverse",
                    justifyContent: "space-around",
                } : {}}>
                    <div className={`home-about-us-img ${item.WidthWrapper ? "widthwrapper" : " "}`} >
                        <img src={item.Image} alt="img" />
                    </div>
                    <div className={`home-about-us-content ${item.position ? "position" : "width"} ${item.StyleMargin ? "margin" : ""}`}>
                        <SectionTitle title={item.SectionTitle} headding={item.SectionHeadding} />
                        <p className={` home-about-us-description `}>
                            {item.description}
                        </p>
                        <Button buttonstyle="btn--main" buttonsize="btn--large">Xem thêm</Button>
                    </div>
                </div>
            })}
            <SectionTitle title="Tin Tức và Khuyến Mãi" headding="KHÁM PHÁ TOCOTOCO NHẬN NGAY KHUYẾN MÃI"></SectionTitle>
            <div className="section-content">
                <Grid gap={20} col={1} mdcol={2} smcol={1} lgcol={2} xlcol={2}>
                    <div className="section-left">
                        <div className="section-left-nth-child">
                            <img src="https://www.tocotocotea.com/wp-content/uploads/2021/12/SPM_CHOCO_zalo-1.png" alt="img5" />
                            <div className="section-left-nth-child-card-info">
                                <div className="section-left-nth-child-card-title">
                                    <h4>Cùng ToCoToCo nhân đôi sự ngọt ngào mùa lễ hội</h4>
                                </div>
                                <div className="section-left-nth-child-card-description">
                                    <p>Theo suckhoedoisong.vn – Nhấn nhá chút vị đậm đà từ socola và hồng trà kết hợp hương thơm beo béo của macchiato kem cà phê thêm chút topping hạt ngũ […]</p>
                                </div>
                                <Button buttonstyle="btn--main" buttonsize="btn--large">Xem thêm</Button>
                            </div>
                        </div>
                        <div className="section-left-event grid-are-1">
                            <img src="https://www.tocotocotea.com/wp-content/uploads/2021/12/SPM_CHOCO_zalo-1.png" alt="img1" />
                            <div className="card-info">
                                <div className="card-description">
                                    <span>Tâm huyết nâng tầm giá trị nông sản Việt của ToCoToCo</span>
                                </div>
                            </div>
                        </div>
                        <div className="section-left-event grid-are-2">
                            <img src="https://www.tocotocotea.com/wp-content/uploads/2021/12/SPM_CHOCO_zalo-1.png" alt="img1" />
                            <div className="card-info">
                                <div className="card-description">
                                    <span>Tâm huyết nâng tầm giá trị nông sản Việt của ToCoToCo</span>
                                </div>
                            </div>
                        </div>
                        <div className="section-left-event grid-are-3">
                            <img src="https://www.tocotocotea.com/wp-content/uploads/2021/12/SPM_CHOCO_zalo-1.png" alt="img1" />
                            <div className="card-info">
                                <div className="card-description">
                                    <span>Tâm huyết nâng tầm giá trị nông sản Việt của ToCoToCo</span>
                                </div>
                            </div>
                        </div>
                        <div className="section-left-event grid-are-4">
                            <img src="https://www.tocotocotea.com/wp-content/uploads/2021/12/SPM_CHOCO_zalo-1.png" alt="img1" />
                            <div className="card-info">
                                <div className="card-description">
                                    <span>Tâm huyết nâng tầm giá trị nông sản Việt của ToCoToCo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-right">section-right</div>
                </Grid>
            </div>
        </>
    );
}
export default Home;