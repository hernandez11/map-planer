import React, { useEffect, useState } from 'react';
import '../Styling/Sidebar.css';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function Sidebar() {
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 100;

        setScrollTop(scrolled)
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
            <div className='sidebar'>
                <div className='progressBar_Wrapper'>
                    <div className='progressBar_Style'
                    style={{ height: `${scrollTop}%` }}
                    ></div>
                </div>

                <span className='sidebar_text'>
                    <p>Scroll Down</p>
                    <ArrowRightAltIcon />
                </span>
            </div>
    )
}

export default Sidebar;
