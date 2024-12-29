import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const EditTodoForm = () => {
  return (
    <View style={styles.textContainer}>
      {/* <Text style={styles.text}>{todo.text}</Text> */}
      <TextInput
        // value={text}
        // onChangeText={setText}
        style={styles.input}
      />
      <View style={styles.btnGroup}>
        <TouchableOpacity>
          <Text>save</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setEdit(false)}>
          <Text>cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditTodoForm;
