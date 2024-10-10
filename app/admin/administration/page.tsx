"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ProductsPage from "../products/page";
import UsersPage from "../users/page";
import Header from "@/components/Header";
import { MdChevronRight } from "react-icons/md";
import Sidebar from "@/components/Sidebar";

function Administration() {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <>
      <div className="bg-primary text-slate-300">
        <Header onToggle={() => setToggle(!toggle)} />

        <Breadcrumb
          className="m-4 h-10 align-middle flex text-white border-s-gray-200 border-[1px] rounded-lg"
          spacing="6px"
          separator={<MdChevronRight color="gray" size={25} />}
        >
          <BreadcrumbItem className="ml-2">
            <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink className="text-white">
              Administracion
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Tabs isFitted variant="solid-rounded">
          <TabList className="m-5 mb-0  gap-2 text-white">
            <Tab>Usuarios</Tab>
            <Tab>Productos</Tab>
            <Tab>Banners</Tab>
          </TabList>
          <TabPanels className="text-white mb-0">
            <TabPanel>
              <UsersPage />
            </TabPanel>
            <TabPanel>
              <ProductsPage />
            </TabPanel>
            <TabPanel>
              <ProductsPage />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <Sidebar isOpen={toggle} onClose={() => setToggle(false)} />
    </>
  );
}

export default Administration;
