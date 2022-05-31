import Achievement from '../page/Achievement'
import CommercialStory from '../page/CommercialStory'
import Event from '../page/Event'
import History from '../page/History'
import Home from '../page/Home'
import Oder from '../page/Oder'
import PromotionNews from '../page/PromotionNews'
import Recruit from '../page/Recruit'
import Stores from '../page/Stores'
import DefaultLayoutTwo from '../Components/DefaultLayuotTwo'
import SliderRecruit from '../Components/SliderRecruit'
export const publicRouter = [
    {
        to: '/achievement',
        compoment: Achievement,
        layout: DefaultLayoutTwo
    }, {
        to: '/category/blogs/commercialStory',
        compoment: CommercialStory,
        layout: DefaultLayoutTwo
    },
    {
        to: '/category/blogs/event',
        compoment: Event,
        layout: DefaultLayoutTwo
    },
    {
        to: '/history',
        compoment: History,
        layout: DefaultLayoutTwo
    },
    {
        to: '/',
        compoment: Home,
    },
    {
        to: '/oder',
        compoment: Oder,
        layout: null
    },
    {
        to: '/category/blogs/promotionNews',
        compoment: PromotionNews,
        layout: DefaultLayoutTwo
    },
    {
        to: '/recruit',
        compoment: Recruit,
        layout: SliderRecruit,
    },
    {
        to: '/stores',
        compoment: Stores,
        layout: null
    },
]