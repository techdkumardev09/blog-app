// utils/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const fetchData = async () => {
  try {
    const response = await axios.get(API_BASE_URL+'/blog');
    return response.data; // Assuming your API returns an array of data
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; // Return an empty array in case of an error
  }
};

export const fetchBlogDataDetails = async (id) => {
  try {
    const response = await axios.get(API_BASE_URL+`/blog/${id}`);
    return response.data; // Assuming your API returns an array of data
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; // Return an empty array in case of an error
  }
};

export const createBlogAPI = async (data) => {
  try {
    const response = await axios.post(API_BASE_URL + "/blog/create", data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

export const updateBlogAPI = async (postId, data) => {
  try {
    const response = await axios.put(API_BASE_URL + `/blog/update/${postId}`, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

export const deleteBlogById = async (blogId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/blog/${blogId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};