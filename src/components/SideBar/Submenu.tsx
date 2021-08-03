import { Link } from "react-router-dom";
import { FC } from "react";
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
        background-color: gray;
        color: white;
        transition: 0.2s ease-in-out;
    }
`

const SidebarLabel = styled.span`
    margin-left: 1rem;
`;

const Submenu: FC<SidebarLinkProps> = ({ item }) => {
    return (
        <>
            <SidebarLink to={item.path}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
            </SidebarLink>
        </>
    )
}

export default Submenu;
