import { Fragment, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import HeadlessTippy from "./HeadlessTippy";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
function Nav({ Navbar }) {
    const { pathname } = useLocation();
    const activeNav = Navbar.findIndex((item) => item.to === pathname);
    const Linkref = useRef(null)
    const ToggleMenuLeft = () => {
        Linkref.current.classList.toggle("active");
    };
    return (
        <div className="nav">
            <nav className="nav-wrapper">
                <ul className="nav-list">
                    {Navbar.map((item, index) => {
                        let Tippy = HeadlessTippy
                        let Icon = Fragment
                        let Menu = []
                        if (item.tippy) {
                            Tippy = item.tippy
                            Icon = item.icon
                            Menu = item.menu
                        } else if (item.tippy === null) {
                            Tippy = Fragment
                            Icon = Fragment
                            Menu = []
                        }
                        return (
                            <Tippy key={item.id} Menu={Menu} >
                                <li className="item">
                                    <Link
                                        ref={Linkref}
                                        key={index}
                                        className={`link ${index === activeNav ? "active" : " "}`}
                                        to={item.to}
                                        onClick={ToggleMenuLeft}
                                    >
                                        {item.children}
                                        <span className="span-active"></span>
                                    </Link>
                                    <Icon type={faChevronDown} />
                                </li>
                            </Tippy>
                        );
                    })}
                </ul>
            </nav>
        </div >
    );
}

export default Nav;