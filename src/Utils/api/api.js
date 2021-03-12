import axios from 'axios';

const getItems = async () => {
  try {
    const allItems = await axios.get('/items');
    return allItems.data.data;
  } catch (error) {
    return error;
  }
};
const getOrders = async () => {
  try {
    const allOrders = await axios.get('/orders');
    return allOrders.data.data;
  } catch (error) {
    return error;
  }
};
const postOrders = async (orders) => {
  try {
    console.log(orders);
    const allOrders = await axios.post('/orders', orders);
    return allOrders.data;
  } catch (error) {
    return error;
  }
};
export default { getItems, getOrders, postOrders };