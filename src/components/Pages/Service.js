import axios from 'axios';

export const allowUser = async (username, password) => {
  try {
    const response = await axios.post('https://fakestoreapi.com/auth/login', {
      username: username,
      password: password,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      console.log('Login failed');
      return { error: 'Login failed' };
    }
  } catch (error) {
    console.error('An error occurred while logging in', error);
    return { error: 'An error occurred while logging in' };
  }
};

export const getProducts = () => axios.get('https://fakestoreapi.com/products');
export const getCategories = () => axios.get('https://fakestoreapi.com/products/categories');

export const getSpecificProducts = (category) => {
  const url = `https://fakestoreapi.com/products/category/${category}`

  return axios.get(url);
}