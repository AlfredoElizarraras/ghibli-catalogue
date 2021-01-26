import axios from 'axios';

const BASE_URL = 'https://ghibliapi.herokuapp.com';
const headers = {
  'Content-Type': 'application/json',
};

export default async () => {
  let request = null;
  try {
    request = await axios({
      method: 'GET',
      headers,
      url: `${BASE_URL}/films`,
    });

    return request;
  } catch (error) {
    return error;
  }
};
