import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 16,
    paddingLeft: 8,
    paddingRight: 12,   
     
  },
  name: {
    flex: 1,
    fontSize: 14,
    color: '#F2F2F2',
    marginLeft: 8
  },
  button: {
    width: 32,
    height: 32,        
    alignItems: 'center',
    justifyContent: 'center'
  },

})