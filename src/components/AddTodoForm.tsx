import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface IAddTodoFormProps {
  addTodo: (text: string) => void;
}

const AddTodoForm: React.FC<IAddTodoFormProps> = ({addTodo}) => {
  const [text, setText] = useState('');
  const handleSubmit = () => {
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        style={styles.input}
        placeholder="Enter task..."
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.btnStyle}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 8,
    gap: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  btnStyle: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
});

export default AddTodoForm;
