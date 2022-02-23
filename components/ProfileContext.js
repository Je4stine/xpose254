import React,{useState,useContext, createContext} from "react";


const ProfileContext= createContext();

const ProfileProvider=(props)=>{
    const [userData, setUserData]=useState([]);
    const [finalData, setFinalData]=useState([]);

    function submitData (){

    };

    return(
            <ProfileContext.Provider value={{userData, setUserData, finalData, setFinalData, submitData}}>
                {props.chldren}
            </ProfileContext.Provider>
    );
};

export default {ProfileProvider, ProfileContext};
