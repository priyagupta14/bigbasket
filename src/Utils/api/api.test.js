import axios from 'axios';
import { getItems, getOrders, postOrders } from './api';
import { mockProducts, mockOrders, mockPostOrder } from '../../mockdata/api';

// jest.mock('../');

describe('test api calls', () => {
  let axiosGetMock;
  let axiosPostMock;

  beforeEach(() => {
    axiosGetMock = jest.spyOn(axios, 'get');
    axiosGetMock.mockClear();
    axiosGetMock.mockResolvedValue({ data: null });

    axiosPostMock = jest.spyOn(axios, 'post');
    axiosPostMock.mockClear();
    axiosPostMock.mockResolvedValue({ data: null });
  });

  describe(getItems.name, () => {
    test('should get items from GET /items', async () => {
      axiosGetMock.mockResolvedValue({ data: { data: [] } });
      await getItems();
      expect(axiosGetMock).toHaveBeenCalledWith('/items');
    });
    test('should return items', async () => {
      axiosGetMock.mockResolvedValue({ data: { data: mockProducts } });
      const orders = await getItems();
      expect(orders).toEqual(mockProducts);
    });
  });
  describe(getOrders.name, () => {
    test('should get post from GET /orders', async () => {
      axiosGetMock.mockResolvedValue({ data: { data: [] } });
      await getOrders();
      expect(axiosGetMock).toHaveBeenCalledWith('/orders');
    });
    test('should return orders array', async () => {
      axiosGetMock.mockResolvedValue({ data: { data: mockOrders } });
      const orders = await getOrders();
      expect(orders).toEqual(mockOrders);
    });
  });
  describe(postOrders.name, () => {
    test('should post order from POST /orders', async () => {
      axiosPostMock.mockResolvedValue({});
      await postOrders(mockPostOrder);
      expect(axiosPostMock).toHaveBeenCalledWith('/orders', mockPostOrder);
    });
    xtest('should return items object', async () => {
      axiosPostMock.mockResolvedValue({ mockPostOrder });
      const postOrder = await postOrders(mockPostOrder);
      expect(postOrder).toEqual(mockPostOrder);
    });
  });
});
