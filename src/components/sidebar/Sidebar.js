import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Users from "@mui/icons-material/PersonOutline";
import Products from "@mui/icons-material/Store";
import Orders from "@mui/icons-material/BookmarkBorder";
import Deliver from "@mui/icons-material/LocalShipping";
import Status from "@mui/icons-material/Assessment";
import Notifications from "@mui/icons-material/NotificationsNone";
import System from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import Log from "@mui/icons-material/PsychologyOutlined";
import Setting from "@mui/icons-material/SettingsApplications";
import Profile from "@mui/icons-material/AccountCircleOutlined";
import LogOut from "@mui/icons-material/LogoutOutlined";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Ansvyager</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LIST</p>
          <li>
            <Users className="icon" />
            <span>Users</span>
          </li>
          <li>
            <Products className="icon" />
            <span>Products</span>
          </li>
          <li>
            <Orders className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <Deliver className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <Status className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <Notifications className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <System className="icon" />
            <span>Systems Health</span>
          </li>
          <li>
            <Log className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <Setting className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <Profile className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogOut className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
