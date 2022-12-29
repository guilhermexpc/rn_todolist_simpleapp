import { Text, TouchableOpacity, View, Image } from "react-native";


import { styles } from "./styles";

type Props = {
  name: string;
  isCheked: boolean;
  onRemove: () => void;
  onCheck: () => void;
}

export function Task(props: Props) {
  const trashIcon = "../../assets/images/trash2.png";
  const circleIcon = "../../assets/images/circle.png";
  const checkIcon = "../../assets/images/check.png";

  const checkIcon2 = props.isCheked ? circleIcon : trashIcon;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={props.onCheck}>
        {
          props.isCheked ? (
            <Image
              source={require(checkIcon)}
            />
          ):(
            <Image
              source={require(circleIcon)}
            />
          )
        }
      </TouchableOpacity>

      <Text style={styles.name}>
        {props.name}
      </Text>

      <TouchableOpacity style={styles.button} onPress={props.onRemove}>
        <Image          
          source={require(trashIcon)}          
        />
      </TouchableOpacity>
    </View>
  )
}