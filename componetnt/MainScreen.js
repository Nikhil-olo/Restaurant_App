import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper';

const MainScreen = ({navigation, route}) => {
// State to hold the list of orders
  const [orders, setOrders] = useState([
    { id: 1, customer: 'John Doe', phone: '123-456-7890', tableId: 'Table 1', dishes: ['Pizza', 'Coke'], completed: false },
    { id: 2, customer: 'Jane Smith', phone: '987-654-3210', tableId: 'Table 2', dishes: ['Burger', 'Coffee'], completed: true },
  ]);
// UseEffect to add new orders to the existing list when passed as params from AddOrderScreen
  useEffect(()=>{
    if (route.params?.newOrder){
        setOrders((prevOrders) => [...prevOrders, route.params.newOrder])
    }
  }, [route.params?.newOrder]);

// Function to handle marking an order as complete or incomplete
  const handleCompleteOrder = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, completed: !order.completed } : order
      )
    );
  };
// Function to handle deleting an order 
  const handleDeleteOrder = (id) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
  };
//Function to render each order item
  const renderItem = ({ item }) => {
    return (
      <View style={[styles.orderItem, item.completed && styles.completedOrder]}>
        <Checkbox
          status={item.completed ? 'checked' : 'unchecked'}
          onPress={() => handleCompleteOrder(item.id)}
        />
        <View style={styles.orderDetails}>
          <Text>{`Customer: ${item.customer}`}</Text>
          <Text>{`Phone: ${item.phone}`}</Text>
          <Text>{`Table: ${item.tableId}`}</Text>
          <Text>{`Dishes: ${item.dishes.join(', ')}`}</Text>
        </View>
        {!item.completed && (
          <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteOrder(item.id)}>
            <Text>Delete</Text>
          </TouchableOpacity>
        )}
      </View>
    );
};

// Function to handle navigating to the AddOrderScreen
const handleAddOrder=()=>{
    navigation.navigate('AddOrderScreen');
}

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddOrder}>
        <Text style={styles.addButtonText}>Add Order</Text>
      </TouchableOpacity>
    </View>
  );
};
// Styles for the MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  completedOrder: {
    backgroundColor: '#f2f2f2',
  },
  orderDetails: {
    flex: 1,
    marginLeft: 8,
  },
  deleteButton: {
    padding: 8,
    backgroundColor: '#f44336',
    borderRadius: 4,
    opacity: 0.8,
  },
  addButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
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

export default MainScreen;
