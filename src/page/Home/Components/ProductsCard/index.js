import Button from "../../../../Components/Button"
function ProductsCard({ tagsSale, prImage, PrTitle, PrPrice, PrPriceDiscount, IsDiscount, IsNew, IsSale }) {
    return (
        <div className="card-wrapper">
            <div className="tags">
                {IsNew && <div className="tags-new">new</div>}
                {IsSale && <div className="tags-discount">{tagsSale}</div>}
            </div>
            <div className="wrapper-img">
                <img className="img" src={prImage} alt="img" />
            </div>
            <div className="product-cart-content">
                <div className="product-card-title">{PrTitle}</div>
                <div className="product-card-price">
                    <span className="price-real">{PrPrice}</span>
                    {IsDiscount && <span className="price-discount">{PrPriceDiscount}</span>}
                </div>
                <div className="product-card-btn">
                    <Button to="/oder" buttonstyle="btn--main" buttonsize="btn--large">Đặt hàng</Button>
                </div>
            </div>
        </div >
    );
}

export default ProductsCard;