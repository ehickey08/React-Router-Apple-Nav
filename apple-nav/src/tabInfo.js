import {FaApple} from 'react-icons/fa'
import {MdLaptopMac, MdTabletMac, MdDesktopMac, MdPhoneIphone, MdPhonelink} from 'react-icons/md'

export const tabInfo = [
    {
        title: 'Mac',
        subNav:[
            ['MacBook', FaApple],
            ['MacBook Air', MdLaptopMac],
            ['MacBook Pro', MdTabletMac],
            ['iMac', MdDesktopMac],
            ['iMac Pro', MdPhoneIphone],
            ['Mac Pro', MdPhonelink],
            ['Mac mini', FaApple],
            ['Compare', MdLaptopMac],
            ['Pro Display XDR', MdTabletMac],
            ['Accessories', MdDesktopMac],
            ['Mojave', MdPhoneIphone]
        ]
    },
    {
        title: 'iPad',
        subNav:[
            ['iPad Pro', MdPhonelink],
            ['iPad Air', FaApple],
            ['iPad', MdLaptopMac],
            ['iPad mini', MdTabletMac],
            ['Compare', MdDesktopMac],
            ['Apple Pencil', MdPhoneIphone],
            ['Smart Keyboard', MdPhonelink],
            ['Accessories', FaApple],
            ['iOS 12', MdLaptopMac]
        ]
    },
    {
        title: 'iPhone',
        subNav:[
            ['iPhone Xs', MdTabletMac],
            ['iPhone XR' , MdDesktopMac],
            ['iPhone 8', MdPhoneIphone],
            ['iPhone 7', MdPhonelink],
            ['Compare', FaApple],
            ['Apple Card', MdLaptopMac],
            ['AirPods', MdTabletMac],
            ['Accessories', MdDesktopMac],
            ['iOs 12', MdPhoneIphone]
        ]
    },
    {
        title: 'Watch',
        subNav:[
            ['Apple Watch Series 4', MdPhonelink],
            ['Apple Watch Nike+', FaApple],
            ['Apple Watch Hermes', MdLaptopMac],
            ['Apple Watch Series 3', MdTabletMac],
            ['watchOS', MdDesktopMac],
            ['Bands', MdPhoneIphone],
            ['Accessories', MdPhonelink],
            ['Compare', FaApple]
        ]
    },
    {
        title: 'TV',
        subNav:[
            ['Apple TV app', MdLaptopMac],
            ['Apple TV+', MdTabletMac],
            ['Apple TV 4k', MdDesktopMac],
            ['Apple TV HD', MdPhoneIphone],
            ['AirPlay', MdPhonelink],
            ['Accessories', FaApple]
        ]
    },
    {
        title: 'Music',
        subNav:[
            ['Apple Music', MdLaptopMac],
            ['iTunes', MdTabletMac],
            ['HomePod', MdDesktopMac],
            ['AirPods', MdPhoneIphone],
            ['iPod touch', MdPhonelink],
            ['Music Accessories', MdDesktopMac],
            ['Gift Cards', MdLaptopMac]
        ]
    },
    {
        title: 'Support',
        subNav:[
            [FaApple,FaApple]
        ]
    }
]
