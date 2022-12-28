import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D0D0D',
        padding: 24
    },

    logo: {
        width: 110.34,
        height: 32,
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
      width: 56,
      height: 56,
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
    }
})