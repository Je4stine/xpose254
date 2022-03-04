import { StyleSheet, Platform } from 'react-native';
export default StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? 30 : 0,
        
    },
});
/* <StatusBar
        barStyle="dark-content"
        translucent={false}
        backgroundColor="transparent"
      /> */