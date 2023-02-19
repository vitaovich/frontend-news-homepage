import { useState } from "react";
import NavItem from "./navItem";
import Image from 'next/image'

const Nav = () => {
    const brand = "Portfolio";
    const [isToggled, setToggle] = useState<boolean>(false);
    const [items, setItems] = useState([
        'Home',
        'New',
        'Popular',
        'Trending',
        'Categories',
    ]);

    const handleHamburgerClick = () => {
        setToggle((prevIsToggled) => {
            return !prevIsToggled;
        });
    };

    return (
        <nav className="">
            <div className="flex justify-between">
                <div className="flex">
                    <Image
                        alt='logo'
                        src='/images/logo.svg'
                        width={65}
                        height={40}
                    />
                </div>
                <div className="hidden md:flex items-center justify-between">
                    <div className="hidden md:flex items-center space-x-4 text-grayishBlue">
                        {items.map((item) => (
                            <NavItem key={item} item={item}></NavItem>
                        ))}
                    </div>
                </div>
                <button
                    id="menu-btn"
                    className={`block md:hidden`}
                    type="button"
                    onClick={handleHamburgerClick}
                >
                    <Image
                        alt='logo'
                        src='/images/icon-menu.svg'
                        width={40}
                        height={17}
                        className={isToggled ? "hidden" : ""}
                    />
                    <Image
                        alt='logo'
                        src='/images/icon-menu-close.svg'
                        width={40}
                        height={17}
                        className={isToggled ? "" : "hidden"}
                    />
                </button>

            </div>
            <div
                id="menu"
                className={`${isToggled ? "" : "hidden"
                    } flex w-full h-full md:hidden bg-slate-800/50 justify-end fixed top-0 right-0`}
            >

                <div
                    className={`${isToggled ? "" : "hidden"
                        } flex flex-col w-2/3 space-y-6 py-4 text-xl md:hidden bg-white`}
                >
                    <button
                        id="menu-btn"
                        className={`block md:hidden`}
                        type="button"
                        onClick={handleHamburgerClick}
                    >
                        <Image
                            alt='logo'
                            src='/images/icon-menu.svg'
                            width={40}
                            height={17}
                            className={isToggled ? "hidden" : ""}
                        />
                        <Image
                            alt='logo'
                            src='/images/icon-menu-close.svg'
                            width={40}
                            height={17}
                            className={isToggled ? "" : "hidden"}
                        />
                    </button>
                    {items.map((item) => (
                        <NavItem key={item} item={item}></NavItem>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Nav;