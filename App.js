import React, { useState } from 'react';
import {
  StyleSheet,
  Modal,
  SafeAreaView,
  TextInput,
  Pressable,
  Text,
  FlatList,
  View,
} from 'react-native';
import TaskItem from './components/TaskItem';

export default function App() {
  const [inputTask, setInputTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleDelteteTask = (itemIndex) => {
    setTasks((prevTask) =>
      prevTask.filter((_item, index) => index !== itemIndex),
    );
  };

  console.log('task', tasks);

  return (
    <View style={styles.centeredView}>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.textStyle}>タスクを入力</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible((preModalVisible) => !preModalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.textInput}
              placeholder={'タスクを入力してください'}
              onChangeText={(text) => {
                setInputTask(text);
              }}
              value={inputTask}
            />
            <View style={styles.buttonLayout}>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => {
                  setModalVisible(false);
                  setTasks((prevTask) => [...prevTask, inputTask]);
                }}>
                <Text style={styles.textStyle}>追加</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() =>
                  setModalVisible((preModalVisible) => !preModalVisible)
                }>
                <Text style={styles.textStyle}>キャンセル</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <FlatList
        keyExtractor={(_item, index) => index.toString()}
        data={tasks}
        renderItem={({ item, index }) => (
          <TaskItem title={item} delete={handleDelteteTask} index={index} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  textInput: {
    width: 200,
    borderWidth: 1,
    borderColor: '#A4BBB8',
    padding: 10,
    borderRadius: 5,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#FAD8FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonLayout: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 200,
  },
});
