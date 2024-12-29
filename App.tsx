import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AddTodoForm from './src/components/AddTodoForm';
import ShowTodo from './src/components/ShowTodo';

export interface IData {
  id: string;
  text: string;
  completed: boolean;
}

const App = () => {
  const [data, setData] = useState<IData[]>([]);

  // Add Todo Function
  const addTodo = (text: string) => {
    setData(d => [
      ...d,
      {
        id: Date.now().toString(),
        text,
        completed: false,
      },
    ]);
  };

  const deleteTodo = (id: string) => {
    setData(d => d.filter(todo => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Todo App</Text>
      {/* Add Todo Form  */}
      <AddTodoForm addTodo={addTodo} />
      <ShowTodo deleteTodo={deleteTodo} todos={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10,
  },
});

export default App;
