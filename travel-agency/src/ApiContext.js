import React from "react";

export const ApiContext = React.createContext();

const apiURL = "http://51.77.82.133:86/api/quotations/QUO_5fb3acb3a0f18";

export const ApiStorage = ({ children }) => {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function callApi() {
      try {
        const response = await fetch(apiURL);
        const json = await response.json();
        setData(json);
        console.log(data);
      } catch (error) {
        console.error("ERROR API");
      }

    }

    callApi();
  }, [data]);

  return <ApiContext.Provider value={{data}}>{children}</ApiContext.Provider>;
};
