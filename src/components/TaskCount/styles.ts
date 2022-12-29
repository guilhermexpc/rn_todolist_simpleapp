import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create ({
  container: {    
    flexDirection: 'row',    
    justifyContent: 'center'   
  },

  text: {
    color: '#4EA8DE',
    fontSize: 14,    
  },

  taskCounter: {       
    backgroundColor: '#333333',
    marginLeft: 8,
    borderRadius: 8,
    paddingHorizontal: 8
  }  
  })