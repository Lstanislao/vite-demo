import Axios from 'axios';

export const axios = Axios.create({
  baseURL: 'http://localhost:3333/api/vpos/v1',
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'x-access-token':
      typeof window !== 'undefined' ? localStorage.getItem('token') : undefined,
  },
});

export const axiosS3 = Axios.create({
  baseURL: 'http://localhost:3333/api/vpos/v1',
  headers: {
    'x-amz-acl': 'public-read',
  },
});
