import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';

import React from 'react';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Queue',
    path: '/queue',
    icon: <MdIcons.MdQueue />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <AiIcons.AiOutlineUser />,
    cName: 'nav-text'
  }
];