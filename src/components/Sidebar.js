import React from "react";
import styles from "./Sidebar.css";
import avatar from "../images/avatar.png";
import classnames from "classnames";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faClipboardList,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

const NavLink = (props) => {
  return (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        return isCurrent
          ? {
            className: styles.active,
          }
          : null;
      }}
    />
  );
};

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: 1,
    };
  }

  render() {
    const { fullName, cci } = this.props.data;

    return (
      <div className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <img className={styles.avatar} alt="avatar" src={avatar} />
          <div className={styles.userInfo}>
            <span>{fullName}</span>
            <br />
            <span>
              {cci}
            </span>
            <br />
          </div>
          <svg className={classnames(styles.hLine)}>
            <line
              x1="25%"
              x2="75%"
              y1="2"
              y2="2"
              stroke="#009261b5"
              strokeWidth="3"
            />
          </svg>
          <nav className={styles.menu}>
            <ul>
              <li>
                <NavLink to="/overview">
                  <FontAwesomeIcon
                    icon={faHome}
                    className={classnames(styles.icon, "fa-fw")}
                  />
                  Overview
                </NavLink>
              </li>
              <li>
                <svg className={classnames(styles.hLine)}>
                  <line
                    x1="0"
                    x2="100%"
                    y1="2"
                    y2="2"
                    stroke="#009261b5"
                    strokeWidth="3"
                  />
                </svg>
              </li>

              <li>
                <NavLink to="/food-log">
                  <FontAwesomeIcon
                    icon={faClipboardList}
                    className={classnames(styles.icon, "fa-fw")}
                  />
                  Carbon Emission Log
                </NavLink>
              </li>
              <li>
                <svg className={classnames(styles.hLine)}>
                  <line
                    x1="0"
                    x2="100%"
                    y1="2"
                    y2="2"
                    stroke="#009261b5"
                    strokeWidth="3"
                  />
                </svg>
              </li>
              <li>
                <NavLink to="/food-log">
                  <FontAwesomeIcon
                    icon={faClipboardList}
                    className={classnames(styles.icon, "fa-fw")}
                  />
                  Activity Log
                </NavLink>
              </li>
              <li>
                <svg className={classnames(styles.hLine)}>
                  <line
                    x1="0"
                    x2="100%"
                    y1="2"
                    y2="2"
                    stroke="#009261b5"
                    strokeWidth="3"
                  />
                </svg>
              </li>
              <li>
                <NavLink to="/settings">
                  <FontAwesomeIcon
                    icon={faCog}
                    className={classnames(styles.icon, "fa-fw")}
                  />
                  Settings
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
