import { IoHome } from "react-icons/io5";
import { SidebarItem } from "../../models/SidebarItem";
import { BiArrowFromBottom, BiArrowFromTop } from "react-icons/bi";
import React from 'react';

export const SidebarData: SidebarItem[] = [
    {
        title: 'Overview',
        path: 'overview',
        icon: <IoHome />,
        iconClosed: <BiArrowFromTop />,
        iconOpened: <BiArrowFromBottom />
    }
]