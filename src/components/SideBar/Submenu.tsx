import { Link } from "react-router-dom";
import { FC, useState } from "react";
import styled from "styled-components";
import { SidebarItem } from "../../models/SidebarItem";

type SidebarLinkProps = {
    item: SidebarItem;
}

const SidebarLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.75rem;
    font-size: 1.12rem;
    padding: 2rem;
    text-decoration: none;
    color: #ffff;

    &:hover{
        background-color: #1f1f1b;
        border-left: 15px groove #6d44dc;
        color: white;
        transition: 350ms;
    }
`

const SidebarLabel = styled.span`
    margin-left: 1rem;
`;

const Submenu: FC<SidebarLinkProps> = ({ item }) => {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <SidebarLink to={item.path}>
                <div>
                    {item.icon}
                    <SidebarLabel onClick={showSidebar}>{item.title}</SidebarLabel>
                </div>
            </SidebarLink>
        </>
    )
}

export default Submenu;
