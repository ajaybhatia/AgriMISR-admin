import { BsFillTagsFill, BsFillTreeFill } from "react-icons/bs";
import { MdAddBusiness, MdPersonAddAlt1 } from "react-icons/md";
import { RiBarChartFill, RiPieChart2Fill } from "react-icons/ri";

import { BiTestTube } from "react-icons/bi";
import DashboardTile from "../components/DashboardTile";
import { FaBell } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMap } from "react-icons/io5";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <h2>Dashboard</h2>
      <div className="d-flex flex-wrap">
        <DashboardTile
          title={0}
          subtitle="Orders Today"
          icon={HiOutlineShoppingBag}
          primaryBgColor="#14A2B8"
          secondaryBgColor="#1491A5"
        />
        <DashboardTile
          title={0}
          subtitle="Total Amount Today"
          icon={RiBarChartFill}
          primaryBgColor="#28A745"
          secondaryBgColor="#24963E"
        />
        <DashboardTile
          light
          title={17}
          subtitle="Customers"
          icon={MdPersonAddAlt1}
          primaryBgColor="#FFC109"
          secondaryBgColor="#E5AD06"
        />
        <DashboardTile
          title={0}
          subtitle="Discounts Today"
          icon={RiPieChart2Fill}
          primaryBgColor="#DC3545"
          secondaryBgColor="#C62F3E"
        />
        <DashboardTile
          title={21}
          subtitle="Crops Registered"
          icon={BsFillTreeFill}
          primaryBgColor="#28A745"
          secondaryBgColor="#24963E"
        />
        <DashboardTile
          title={13}
          subtitle="Satellite Insights"
          icon={IoMap}
          primaryBgColor="#14A2B8"
          secondaryBgColor="#1491A5"
        />
        <DashboardTile
          title={0}
          subtitle="CC Notifications Sent Today"
          icon={FaBell}
          primaryBgColor="#027BFF"
          secondaryBgColor="#006EE5"
        />
        <DashboardTile
          light
          title={0}
          subtitle="Soil Tests Today"
          icon={BiTestTube}
          primaryBgColor="#FFC109"
          secondaryBgColor="#E5AD06"
        />
        <DashboardTile
          title={27}
          subtitle="Today Products"
          icon={BsFillTagsFill}
          primaryBgColor="#027BFF"
          secondaryBgColor="#006EE5"
        />
        <DashboardTile
          title={1}
          subtitle="Total Vendors"
          icon={MdAddBusiness}
          primaryBgColor="#DC3545"
          secondaryBgColor="#C62F3E"
        />
      </div>
    </>
  );
};

export default Dashboard;
