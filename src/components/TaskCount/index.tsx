import React from 'react';
import { Text, View, TextInput, TouchableOpacity} from 'react-native';
import { styles } from './styles';

type Props = {
  value: number;
  type: 'Criadas' | 'Concluidas'  
}

export function TaskCount(props: Props) {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, {color: props.type == 'Criadas' ? '#4EA8DE' : '#8284FA'}] }>{props.type}</Text>
          <View style={styles.taskCounter}>
            <Text style={styles.text}>{props.value}</Text>
          </View>
        </View>


    )
}