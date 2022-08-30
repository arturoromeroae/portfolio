import {FC} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { IconContext } from 'react-icons';
import { IoMenu, IoClose } from 'react-icons/io5'
import { useState } from 'react';
import { SidebarData } from './SidebarData';
import Submenu from './Submenu';
import React from 'react';

const Nav = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 3rem;
    background-color: black;
`;

const SidebarNav = styled.div<{sidebar: boolean}>`
    width: 250px;
    height: 100vh;
    background-color: black;
    position: fixed;
    top: 0;
    z-index: 999;
    left: ${({sidebar}) => (sidebar ? '0' : '-100%')};
    transition: 0.5s ease-in-out;
`;

const NavIcon = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 3rem;
    font-size: 2rem;
    margin-left: 2rem;
`;

const SidebarWrap = styled.div`

`;

const Sidebar: FC = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav>
                    <NavIcon to='#' onClick={showSidebar}>
                        <IoMenu />
                    </NavIcon>
                </Nav>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon to='#' onClick={showSidebar}>
                            <IoClose />
                        </NavIcon>
                        {SidebarData.map((item, index) => {
                            return <Submenu item={item} key={index} />
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    )
};

export default Sidebar;
