import { AiFillDashboard } from "react-icons/ai";
import { FaLeaf } from "react-icons/fa";
import { RiLeafFill } from "react-icons/ri";

const adminSubmenus = [
  {
    title: "Dashboard",
    icon: AiFillDashboard,
    items: [],
    target: "/",
  },
  {
    title: "Crops",
    icon: AiFillDashboard,
    items: [
      {
        title: "Category",
        icon: FaLeaf,
        target: "/crops/categories",
      },
      {
        title: "Crop List",
        icon: RiLeafFill,
        target: "/crops/list",
      },
    ],
    target: "/crops",
  },
];

export default adminSubmenus;
