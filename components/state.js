export const DEFAULT_STATE={
    name: "",
    description: "",
    contacts: "",
    city: "",
    area : "",
    host: "",
    gender1:"",
    gender2:"",
    age:"",
    result:"",
};

export const ProfileReducer= (state, {key, payload})=>{
    switch(key){
        case "name":
            state.name.value=payload.newValue;
            return;
        case "description":
            state.description.value.newValue;
            return;
        case "contacts": 
            state.contacts.value.newValue;
            return;
        case "city":
            state.city.value.newValue;
            return;
        case "area":
            state.area.value.newValue;
            return;
        case "host":
            state.host.value.newValue;
            return;
        case "gender1":
            state.gender1.value.newValue;
            return;
        case "gender2":
            state.gender2.value.newValue;
            return;
        case "age":
            state.age.value.newValue;
            return;
        case "result":
            state.result.value.newValue;
            return;
        default:
            throw new Error(`Unhandled action type: ${key}`);
            
    }
};