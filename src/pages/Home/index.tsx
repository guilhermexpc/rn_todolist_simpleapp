import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import { styles } from './styles';

import { TaskCount } from '../../components/TaskCount';


export function Home(){
    const logoUri = '../../assets/images/Logo.png';
    const [tasks, setTasks] = useState<string[]>([]);
    const [taskName, setTaskName] = useState('');

    function handleNewTask() {
      if (tasks.includes(taskName) || taskName == '') {
        return Alert.alert('Tarefa já cadastrada', 'Já existe uma tarefa na lista com este nome');
      }      

      setTasks(initialState => [...initialState, taskName]);
      setTaskName('');
    }
    
    return (
        <View style={styles.container}>     
         <Image
                style={styles.logo}
                source={require(logoUri)}
            />  

          <View style={styles.form}>
            <TextInput 
                style={styles.input}               
                placeholder="Nome do participante"
                placeholderTextColor="#6B6B6B"
            />

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => handleNewTask()}>
                <Text style={styles.buttonText}>
                +
                </Text>
            </TouchableOpacity>
          </View>
          
        </View>
    )
}