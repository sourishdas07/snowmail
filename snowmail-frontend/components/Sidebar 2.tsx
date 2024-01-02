'use client';

import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards, HiHome } from 'react-icons/hi';

export default function HomeSidebar() {
  return (
    <Sidebar className="bg-sky-200 h-screen" aria-label="Sidebar with logo branding example">
        <div className="text-xl text-center">
            Snowmail
        </div>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/home" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/profile" icon={HiUser}>
            Profile
          </Sidebar.Item>
          <Sidebar.Item href="/" icon={HiHome}>
            Home
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
