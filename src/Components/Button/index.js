import { Children } from "react"
import { Link } from "react-router-dom"

function Button({ children, to, href, buttonstyle, buttonsize }) {
    const STYLES = ["btn--main", "btn--outline", "btn--login"]
    const SIZES = ["btn--small", "btn--large"]

    const checkBtnStyle = STYLES.includes(buttonstyle) ? buttonstyle : STYLES[0]
    const checkBtnSize = SIZES.includes(buttonsize) ? buttonsize : STYLES[0]

    const props = {}
    let Comp = 'button'
    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }
    return (
        <Comp className={`btn ${checkBtnStyle} ${checkBtnSize}`} {...props} >{children}</Comp>
    );
}

export default Button;