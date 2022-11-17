import { AiFillDashboard } from "react-icons/ai";
import { FaLeaf } from "react-icons/fa";
import { RiLeafFill } from "react-icons/ri";

const adminSubmenus = [
  {
    title: "Dashboard",
    icon: AiFillDashboard,
    items: [],
    target: "/dashboard",
  },
  {
    title: "Crops",
    icon: AiFillDashboard,
    items: [
      {
        title: "Category",
        icon: FaLeaf,
        target: "/dashboard/crops/categories",
      },
      {
        title: "Crop List",
        icon: RiLeafFill,
        target: "/dashboard/crops/list",
      },
    ],
    target: "",
  },
];

export default adminSubmenus;
