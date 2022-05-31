import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef } from 'react';
import Image from '../../Image'
import Nav from './Nav';
import HeadlessTippy from './Nav/HeadlessTippy';
import Icon from './Nav/Icon';
function Header() {
    // const 
    const Navbar = [
        {
            id: 1,
            to: '/',
            children: 'Trang Chủ',
            tippy: null,
        },
        {
            id: 2,
            to: '/history',
            children: 'Giới Thiệu',
            tippy: HeadlessTippy,
            icon: Icon,
            menu: [
                {
                    to: "/history",
                    item: "Lịch Sử và Sứ Mệnh",
                },
                {
                    to: "/achievement",
                    item: "Thành Tựu Đạt Được",
                }
            ]
        },
        {
            id: 3,
            to: '/oder',
            children: 'Sản Phẩm ',
            tippy: null,
        },
        {
            id: 4,
            to: '/category/blogs/promotionNews',
            children: 'Tin tức ',
            tippy: HeadlessTippy,
            icon: Icon,
            menu: [
                {
                    to: "/category/blogs/promotionNews",
                    item: "Tin Tức Khuyến Mãi",
                },
                {
                    to: "/category/blogs/commercialStory",
                    item: "Câu Chuyện Thương Hiệu ",
                },
                {
                    to: "/category/blogs/event",
                    item: "Sự Kiện",
                }
            ]
        },
        {
            id: 5,
            to: '/stores',
            children: 'Cửa Hàng',
            tippy: null,
        },
        {
            id: 6,
            to: '/recruit',
            children: 'Tuyển Dụng',
            tippy: null,

        },
    ]
    const HeaderWrapperRef = useRef()
    useEffect(() => {
        function hanldScroll() {
            const lastScrolltop = 77;
            const scrollTop = window.pageXOffset || document
                .documentElement.scrollTop;
            console.log(scrollTop);
            if (scrollTop > 0 && scrollTop < lastScrolltop) {
                HeaderWrapperRef.current.style.top = "0"
                HeaderWrapperRef.current.style.background = "transparent"
            }
            else if (scrollTop > lastScrolltop && scrollTop < 100) {
                HeaderWrapperRef.current.style.position = "absolute"
                HeaderWrapperRef.current.style.top = "-77px"
                HeaderWrapperRef.current.style.background = "transparent"
            } else if (scrollTop > 300) {
                HeaderWrapperRef.current.style.transition = "top ease 0.5s"
                HeaderWrapperRef.current.style.position = "fixed"
                HeaderWrapperRef.current.style.top = "0"
                HeaderWrapperRef.current.style.right = "0"
                HeaderWrapperRef.current.style.background = "#282828"
            }
        }
        window.addEventListener('scroll', hanldScroll)

        return () => {
            window.removeEventListener('scroll', hanldScroll)
        }
    }, [])
    return (
        <header ref={HeaderWrapperRef} className="header-wraper">
            <div className="header">
                <div className="header-logo">
                    <Image src="https://tocotocotea.com/wp-content/uploads/2021/04/Logo-ngang-01.png" className="logo" alt="Tocotoco" />
                </div>
                <Nav Navbar={Navbar} />
                <div className='header-search'>
                    <div class="search-box">
                        <button class="btn-search"> <FontAwesomeIcon className='searchicon' icon={faMagnifyingGlass} /></button>
                        <input type="text" class="input-search" placeholder="Type to Search..." />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;