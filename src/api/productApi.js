import axiosClient from './axiosClient';

const productApi = {
  getAll(params) {
    return axiosClient.get('/products', { params });
  },
};

export default productApi;
