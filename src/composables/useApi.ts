import axios from 'axios';

const server = localStorage.getItem("serverAddress");
const API_URL = server ? server : 'http://127.0.0.1:5000';

export const useApi = () => {
  const predict = async (image:any) => {
    const formData = new FormData();
    formData.append('image', image);

    const response = await axios.post(API_URL+'/get_features', formData,{
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Error predicting image');
    }
  };

  return { predict };
};