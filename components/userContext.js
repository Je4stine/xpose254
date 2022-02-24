import React, {useState, createContext} from 'react';

const UserContext = createContext();

const UserProvider = (props) => {
  const [finalState, setFinalState] = useState([]);
  const [userState, setUserState] = useState([]);
//     name: '',
//     description: '',
//     contacts: '',
//     city: '',
//     area: '',
//     host: '',
//     gender1: '',
//     gender2: '',
//     age: '',
//     result:'',
//   }
  

  return (
    <UserContext.Provider value={{finalState, setFinalState, userState, setUserState}}>
      {props.children}
    </UserContext.Provider>
  );
};

export {UserContext, UserProvider};