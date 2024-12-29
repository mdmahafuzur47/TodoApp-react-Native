import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {IData} from '../../App';

interface IShowTodoProps {
  todos: IData[];
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, newText: string) => void;
}

const ShowTodo: React.FC<IShowTodoProps> = ({
  todos,
  deleteTodo,
  updateTodo,
}) => {
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);
  const [text, setText] = useState<string>('');

  return (
    <ScrollView style={styles.container}>
      {todos.map(todo => (
        <View key={todo.id} style={styles.textContainer}>
          {editingTodoId === todo.id ? (
            <TextInput
              value={text}
              onChangeText={setText}
              style={styles.input}
            />
          ) : (
            <Text style={styles.text}>{todo.text}</Text>
          )}
          <View style={styles.btnGroup}>
            {editingTodoId === todo.id ? (
              <>
                <TouchableOpacity
                  onPress={() => {
                    updateTodo(todo.id, text);
                    setEditingTodoId(null);
                    setText('');
                  }}>
                  <Text style={styles.saveButton}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setEditingTodoId(null);
                    setText('');
                  }}>
                  <Text style={styles.cancelButton}>Cancel</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity
                  onPress={() => {
                    setEditingTodoId(todo.id);
                    setText(todo.text);
                  }}>
                  <Text style={styles.editButton}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
                  <Text style={styles.deleteButton}>Delete</Text>
                </TouchableOpacity>
              </>
            )}
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
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  btnGroup: {
    flexDirection: 'row',
    gap: 10,
  },
  textContainer: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  editButton: {
    color: 'blue',
  },
  saveButton: {
    color: 'green',
  },
  cancelButton: {
    color: 'orange',
  },
  deleteButton: {
    color: 'red',
  },
});

export default ShowTodo;
