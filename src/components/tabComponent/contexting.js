import { createContext, useState } from "react";

const ContextData = createContext();

export const ContextingComp = (props) => {
  const [array, setArray] = useState([
    {
      userName: "adnanajey",
      userPass: "asdfqwer",
    },
    {
      userName: "anasajey",
      userPass: "jkljkl",
    },{
      userName: "mohsin",
      userPass: "mohsin123",
    },
    
  ]);

  const updatingArr = (nm,ps) => {

    const newing=[{
      userName:nm,
      userPass:ps
    }]

    setArray((prevData)=>{
      return prevData.concat(newing)
    });
    // console.log(array);
  };

  const dataAcc = {
    arraying: array,
    updatingArraying: updatingArr,
  };

  return (
    <ContextData.Provider value={dataAcc}>
      {props.children}
    </ContextData.Provider>
  );
};

export default ContextData;
