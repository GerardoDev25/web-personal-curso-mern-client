import { Button } from "antd";
import {
   PoweroffOutlined,
   ArrowLeftOutlined,
   ArrowRightOutlined,
} from "@ant-design/icons";

import "./MenuTop.scss";
import logo from "../../../assets/img/png/3.1 logo-white.png";

const MenuTop = ({ setmenuCollpsed, menuCollpsed }) => {
   const handleCollapse = () => {
      setmenuCollpsed(!menuCollpsed);
   };

   return (
      <div className="menu-top">
         <div className="menu-top__left">
            <img
               className="menu-top__left-logo"
               src={logo}
               alt="Gerardo miranda"
            />
            <Button type="link" onClick={handleCollapse}>
               {menuCollpsed ? (
                  <ArrowRightOutlined />
               ) : (
                  <ArrowLeftOutlined />
               )}
            </Button>
         </div>

         <div className="menu-top__right">
            <Button
               type="link"
               onClick={() => console.log("desconeccion")}
            >
               <PoweroffOutlined />
            </Button>
         </div>
      </div>
   );
};

export default MenuTop;
