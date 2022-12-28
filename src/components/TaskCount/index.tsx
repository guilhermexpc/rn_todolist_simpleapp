import React from 'react';
import { Text, View, TextInput, TouchableOpacity} from 'react-native';
import { styles } from './styles';

type Props = {
  taskQuantity: number;
  type: 'Criadas' | 'Concluidas'
}

export function InputTask(props: Props) {
    return (
        <View style={styles.container}>
          <Text  style={styles.container}>{props.type}</Text>
          <View>
            <Text style={styles.container}>{props.taskQuantity}</Text>
          </View>
        </View>
    )
}