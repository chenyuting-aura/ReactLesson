import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import React from 'react';

const TaskItem = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.delete(props.index)}
      style={{ width: 220 }}>
      <View style={styles.item}>
        <Text style={styles.textStyle}>
          index:{props.index} title:{props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    borderRadius: 20,
    backgroundColor: '#DBF9F5',
    elevation: 2,
  },
  textStyle: {
    color: '#24060A',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TaskItem;
