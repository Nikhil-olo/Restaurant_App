import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const AddOrderScreen = ({ navigation, route }) => {
  const [customer, setCustomer] = useState('');
  const [phone, setPhone] = useState('');
  const [tableId, setTableId] = useState('');
  const [dishes, setDishes] = useState('');

  const handleAddOrder = () => {
    // Implement add order functionality
    const newOrder = {
      id: Date.now(),
      customer,
      phone,
      tableId,
      dishes: dishes.split(',').map((dish) => dish.trim()),
      completed: false,
    };
    // Pass the newOrder back to the main screen using navigation and params
    navigation.navigate('MainScreen', { newOrder });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Customer Name"
        value={customer}
        onChangeText={setCustomer}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Table ID"
        value={tableId}
        onChangeText={setTableId}
      />
      <TextInput
        style={styles.input}
        placeholder="Dishes (Comma separated)"
        value={dishes}
        onChangeText={setDishes}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddOrder}>
        <Text style={styles.addButtonText}>Add Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  addButton: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
  },
});

export default AddOrderScreen;
