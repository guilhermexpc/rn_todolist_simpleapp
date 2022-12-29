import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D0D0D',
        padding: 24,
        paddingTop: 70
    },

    logo: {
        width: 110.34,
        height: 32,
    },

    clipboard: {
      width: 56,
      height: 56,
      marginBottom: 16
  },

    input: {
      flex: 1,
      height: 54,
      backgroundColor: '#262626',
      borderRadius: 5,
      color: '#808080', 
      padding: 16, 
      fontSize: 16,
      marginRight: 12
    },

    buttonText: {
      color: '#F2F2F2',
      fontSize: 24
    },

    button: {
      width: 54,
      height: 54,
      borderRadius: 5,
      backgroundColor: '#1E6F9F',
      alignItems: 'center',
      justifyContent: 'center'
    },

    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 42      
    }, 

    taskCountContainer: {               
      flexDirection: 'row',            
      justifyContent: 'space-between',  
    }, 

    taskList: {
      flex: 1, 
      borderTopColor: 'gray', 
      borderTopWidth: 1, 
      marginTop: 16, 
      paddingTop: 8,
    },

    containerEmptyList: {      
      alignItems: 'center',
      marginTop: 16,
    },

    listEmptyText: {
      color: '#FFF',
      fontSize: 14,
      textAlign: 'center'
    },


})