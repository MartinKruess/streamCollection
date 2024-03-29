import { useEffect, useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import liveLogo from "../../assets/images/liveLogo.png";
import { AppContext, SettingsContext } from "../context/userContext";
import connected from "../../assets/images/connected.svg";
import disconnected from "../../assets/images/disconnected.svg";

export const Navi = () => {
  const { setLoginToken, loginToken, setLogedUserData } =
    useContext(AppContext);
  const { sideSettings, setSideSettings, logedUserData } =
    useContext(SettingsContext);

  const [dropDown, setDropDown] = useState(false);
  const [settings, setSettings] = useState(false);
  const savedSideSettings = JSON.parse(localStorage.getItem("sideSettings"));
  const savedLogedUserData = JSON.parse(localStorage.getItem("logedUserData"));
  const twitchXAuthURL =
    "https://streamcollectionbackend.onrender.com/auth/twitch";

  useEffect(() => {
    localStorage.setItem("sideSettings", JSON.stringify(sideSettings));
    // console.log("sideSettings", sideSettings)
  }, [sideSettings]);

  if (dropDown === false && settings === true) {
    setSettings(false);
  }

  const logout = () => {
    setLoginToken(false);
    setLogedUserData(false);
    return <Navigate to="/"></Navigate>;
  };

  // console.log("USERDATA", savedLogedUserData)

  return (
    <nav>
      <div id="navLogo">
        <img src={liveLogo} alt="" />
      </div>

      {loginToken === null || !loginToken ? (
        <>
          <ul>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#learn">Learn</a>
            </li>
            <li>
              <a href="/#membership">Membership</a>
            </li>
          </ul>
          <div id="navButtons">
            <Link to="/login">
              <input className="linkBtn" type="button" value="Login" />
            </Link>
            <Link to="/register">
              <input type="button" value="Sign up" />
            </Link>
          </div>
        </>
      ) : (
        <>
          <button
            className="profileBtn"
            onClick={() => setDropDown(!dropDown)}
          ></button>
          {dropDown ? (
            <div className="profilDrowdown">
              <label>Hallo {savedLogedUserData.username}</label>
              <button>Account Details</button>
              <button onClick={() => setSettings(!settings)}>
                Account Settings
              </button>
              {settings ? (
                <div className="accSettings">
                  <div
                    className="lockContainer"
                    onClick={() =>
                      setSideSettings({
                        ...sideSettings,
                        isLocked: !sideSettings.isLocked,
                      })
                    }
                  >
                    {sideSettings.isLocked ? (
                      <i className="fa-solid fa-lock"></i>
                    ) : (
                      <i className="fa-solid fa-unlock"></i>
                    )}
                  </div>
                  <div>
                    <label>Dark/Light Mode</label>
                    <input
                      type="button"
                      value={sideSettings.mode}
                      onClick={() =>
                        sideSettings.isLocked === false &&
                        (sideSettings.mode === "Dark"
                          ? setSideSettings({ ...sideSettings, mode: "Light" })
                          : setSideSettings({ ...sideSettings, mode: "Dark" }))
                      }
                    />
                  </div>
                  <div>
                    <label>Sprache</label>
                    <input
                      type="button"
                      value={sideSettings.lang}
                      onClick={() =>
                        sideSettings.isLocked === false
                          ? sideSettings.lang === "ENG"
                            ? setSideSettings({ ...sideSettings, lang: "DE" })
                            : setSideSettings({ ...sideSettings, lang: "ENG" })
                          : setSideSettings({
                              ...sideSettings,
                              lang: sideSettings.lang,
                            })
                      }
                    />
                  </div>
                  <div>
                    <div
                      className="connectButton"
                      onClick={() =>
                        sideSettings.isLocked === false &&
                        setSideSettings({
                          ...sideSettings,
                          isAuthTwitch: !sideSettings.isAuthTwitch,
                        })
                      }
                    >
                      <label>Twitch Account</label>
                      <div className="settingsImgContainer">
                        {sideSettings.isAuthTwitch ? (
                          <img src={connected}></img>
                        ) : (
                          <a href={twitchXAuthURL}>
                            <img src={disconnected}></img>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="connectButton"
                      onClick={() =>
                        setSideSettings({
                          ...sideSettings,
                          isLocked: !sideSettings.isLocked,
                        })
                      }
                    >
                      <label>Youtube Account</label>
                      <div className="settingsImgContainer">
                        {sideSettings.isLocked ? (
                          <img src={connected}></img>
                        ) : (
                          <a href="">
                            <img src={disconnected}></img>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <label>OBS Schlüssel</label>
                    <input type="button" value="User" />
                  </div>
                </div>
              ) : (
                <div className="blendOut"></div>
              )}
            </div>
          ) : (
            <div className="blendOut"></div>
          )}
          <Link to="/">
            <input type="button" value="Logout" onClick={logout} />
          </Link>
        </>
      )}
    </nav>
  );
};
