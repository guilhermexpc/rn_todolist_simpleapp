import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Alert, FlatList} from 'react-native';
import { styles } from './styles';

import { TaskCount } from '../../components/TaskCount';
import { Task } from '../../components/Task';

interface iTasks {
  name: string,
  cheked: boolean
}

export function Home(){
    const logoIcon = '../../assets/images/Logo.png';
    const clipboardIcon = '../../assets/images/clipboard.png';
    const [tasks, setTasks] = useState<iTasks[]>([]);
    const [tasksFinished, setTasksFinished] = useState<true[] | null>([]);
    const [taskName, setTaskName] = useState('');    

    function handleNewTask() {      
      console.log(tasks.filter(element => element.name == taskName));
      console.log(taskName);
      if (taskName == ''){
        return Alert.alert('Tarefa sem nome', 'Insira um nome para a tarefa ');
      }else {
        if (tasks.filter(element => element.name == taskName).length > 0 ) {
          return Alert.alert('Tarefa já cadastrada', 'Já existe uma tarefa na lista com este nome');
        } 
      }

      setTasks(initialState => [...initialState,
         {
          name: taskName, 
          cheked: false
        }
        ]);
      setTaskName('');
    }

    function handleTaskRemove(taskIndex: number) {
      console.log('Call handleTaskRemove');      

      Alert.alert("Excluir", `Deseja excluir esta tarefa?`, [
        {
          text: 'Sim',
          onPress: () => {
            Alert.alert("Excluido!", 'Tarefa excluida');
            setTasks(prevState => prevState.filter((task, index) => index !== taskIndex));
          }
        },
        {
          text: 'Não',          
        }
      ])

      
    }

    function handleTaskCheck(taskIndex: number) {
    const newTask = tasks.map((element, index) => {
      if (index === taskIndex){
        element.cheked = !element.cheked;
        element.name = element.name;
        return element
      }else {
        return element
      }
    });

    console.log(`handleTaskCheck: ${JSON.stringify(newTask)}`);
    setTasks(newTask);
    }
    
    return (
        <View style={styles.container}>     
          <View style={{alignItems: 'center'}}>
            <Image
                  style={styles.logo}
                  source={require(logoIcon)}
            /> 
          </View>

          <View style={styles.form}>
            <TextInput 
                style={styles.input}               
                placeholder="Nome do participante"
                placeholderTextColor="#6B6B6B"
                onChangeText={setTaskName}     
                value={taskName}   
            />

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => handleNewTask()}>
                <Text style={styles.buttonText}>
                  +
                </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.taskCountContainer}>
            <TaskCount 
              value={tasks.length}
              type={'Criadas'}
            />

            <TaskCount 
              value={tasks.filter((element) => element.cheked).length}
              type={'Concluidas'}
            />            
          </View>

          <View style={[styles.taskList]}>
            <FlatList
                data={tasks}
                renderItem={task => (
                  <Task
                    key={task.index} 
                    name={task.item.name} 
                    isCheked={task.item.cheked}
                    onRemove={() => handleTaskRemove(task.index)}
                    onCheck={() => handleTaskCheck(task.index)}
                  />
                )}

                showsVerticalScrollIndicator={false}   
                             
                ListEmptyComponent={() => (
                  <View style={styles.containerEmptyList}>
                    <Image
                      style={styles.clipboard}
                      source={require(clipboardIcon)}
                    />  
                    <Text style={styles.listEmptyText}>
                      Você ainda não tem tarefas cadastradas {"\n"} Crie tarefas e organize seus itens a fazer
                    </Text>                    
                  </View>
                )}
            />
          </View>           
        </View>
    )
}