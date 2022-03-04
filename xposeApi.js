import uuid4 from 'uuid/v4';
export function uploadItems(){
    if(setUserState.image){
        const fileExtension = setUserState.image.split('.').pop();

        var uuid = uuid4();
        const fileName = `${uuid}.${fileExtension}`;

        var storageRef = firebase.storage().ref(`profile/images/${fileName}`);

        storageRef.putFile(setUserState.image)
        .on(
            firebase.storage.TaskEvent.STATE_CHANGED,
            snapshot => {
                if(snapshot.state === firebase.storage.TaskState.SUCCESS){
                    console.log("success");
                }
            },
            error=>{
                unsubscribe();
            },
            ()=>{
                storageRef.getDownloadURL().then(url => {
                    console.log(url);
                    // setUserState({...userState, image:url});
                    // addDoc(db,"profile",{
                    //     name: setUserState.name,
                    //     description: setUserState.description,
                    //     contacts: setUserState.contacts,
                    //     city: setUserState.city,
                    //     area: setUserState.area,
                    //     hostStatus: setUserState.hostStatus,
                    //    gender: userState.gender,
                    //    interest: userState.interest,
                    //    age: userState.age,
                    //    image: userState.image,
                });
            }
        )
    }
}