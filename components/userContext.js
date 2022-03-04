import React, {useState, createContext} from 'react';

const UserContext = createContext();

const UserProvider = (props) => {
  const [finalState, setFinalState] = useState([]);
  const [userState, setUserState] = useState([]);

  return (
    <UserContext.Provider value={{finalState, setFinalState, userState, setUserState}}>
      {props.children}
    </UserContext.Provider>
  );
};

export {UserContext, UserProvider};