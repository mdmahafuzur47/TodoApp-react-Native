import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IData} from '../../App';

interface IShowTodoProps {
  todos: IData[];
  deleteTodo: (id: string) => void;
}

const ShowTodo: React.FC<IShowTodoProps> = ({todos, deleteTodo}) => {
  return (
    <ScrollView style={styles.container}>
      {todos.map(todo => (
        <View style={styles.textContainer}>
          <Text style={styles.text}>{todo.text}</Text>
          <View style={styles.btnGroup}>
            <TouchableOpacity>
              <Text>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteTodo(todo?.id)}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    width: '100%',
    // overflow: 'hidden',
  },
  btnGroup: {
    flexDirection: 'row',
    gap: 5,
  },
  textContainer: {
    flexDirection: 'row',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    paddingVertical: 2,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default ShowTodo;
