import { createContext, useState, useEffect, useContext } from "react";

export const TwitchContext = createContext();

export const TwitchProvider = ({ children }) => {
  const [twitchData, setTwitchData] = useState();

  // Handle by change
  useEffect(() => {}, [twitchData]);

  return (
    <TwitchContext.Provider value={{ twitchData, setTwitchData }}>
      {children}
    </TwitchContext.Provider>
  );
};
