import React from "react";

export const ApiContext = React.createContext();

const apiURL = "http://51.77.82.133:86/api/quotations/QUO_5fb3acb3a0f18";

export const ApiStorage = ({ children }) => {

  const [dataApi, setDataApi] = React.useState(null);

  React.useEffect(() => {

    
    async function callApi() {
      const api = await fetch(apiURL)
        .then(response => response.json())
        setDataApi(api.results.data);
        
      console.log(dataApi);

    //   // try {
    //   //   // const response = await fetch(apiURL);
    //   //   // const json = response.json();
    //   //   // setData(json.results.data);
    //   //   // console.log(json.results.data)
    //   // } catch (error) {
    //   //   console.error("ERROR API");
    //   // }
      
    }

   callApi();
  }, []);

  return (
    <ApiContext.Provider value={dataApi}>
      {children}
    </ApiContext.Provider>
  );
};
