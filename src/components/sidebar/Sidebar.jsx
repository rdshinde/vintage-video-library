import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import "./sidebar.css";
export const Sidebar = () => {
  const { userAuthState, logoutHandler } = useAuth();
  const isUserLoggedIn = userAuthState?.isUserLoggedIn;
  const user = userAuthState?.user;
  const firstName = user?.firstName;
  const lastName = user?.lastName;
  const navigate = useNavigate();
  return (
    <div className="sidebar-wrapper">
      <aside className="sidebar">
        <div className="list-divider"></div>
        <div className="sidebar__list text-offwhite ">
          <div className="list-divider"></div>
          <section className="sidebar__list-section">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? `text-start text-4 bold-lg nav-link active-link`
                  : `text-start text-4 bold-lg nav-link`
              }
            >
              <div>
                <span className="m-r-md">
                  <i className="fa-solid fa-home"></i>
                </span>
                Home
              </div>
            </NavLink>

            <NavLink
              to={"/playlist"}
              className={({ isActive }) =>
                isActive
                  ? `text-start text-4 bold-lg nav-link active-link`
                  : `text-start text-4 bold-lg nav-link`
              }
            >
              <div>
                <span className="m-r-md">
                  <i className="fa-solid fa-clapperboard"></i>
                </span>
                Playlist
              </div>
            </NavLink>
            <NavLink
              to={"/liked-video"}
              className={({ isActive }) =>
                isActive
                  ? `text-start text-4 bold-lg nav-link active-link`
                  : `text-start text-4 bold-lg nav-link`
              }
            >
              <div>
                <span className="m-r-md">
                  <i className="fa fa-heart"></i>
                </span>
                Liked Videos
              </div>
            </NavLink>
            <NavLink
              to={"/watch-later"}
              className={({ isActive }) =>
                isActive
                  ? `text-start text-4 bold-lg nav-link active-link`
                  : `text-start text-4 bold-lg nav-link`
              }
            >
              <div>
                <span className="m-r-md">
                  <i className="fa fa-clock"></i>
                </span>
                Watch Later
              </div>
            </NavLink>
            <NavLink
              to={"/history"}
              className={({ isActive }) =>
                isActive
                  ? `text-start text-4 bold-lg nav-link active-link`
                  : `text-start text-4 bold-lg nav-link`
              }
            >
              <div>
                <span className="m-r-md">
                  <i className="fa fa-history"></i>
                </span>
                History
              </div>
            </NavLink>
          </section>
        </div>
      </aside>
      {isUserLoggedIn && (
        <section className="sidebar__avatar text-offwhite text-center flex-center">
          <div className="user-info flex-center m-y-md">
            <div className="text-default">
              <img
                className="avatar"
                src="https://bermuda-css.netlify.app/assets/avatar.png"
                alt="default-avatar"
              />
            </div>
            <div className="text-start cursor-pointer">
              <div className="text-4 bold-lg">{`${firstName} ${lastName}`}</div>
              <button
                className="btn logout-btn text-4 bold-lg text-danger"
                onClick={() => {
                  logoutHandler();
                  navigate("/");
                }}
              >
                <span className="m-r-md text-4 bold-lg">
                  <i className="fa-solid fa-right-from-bracket"></i>
                </span>
                Logout
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
