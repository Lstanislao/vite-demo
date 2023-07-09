import {  useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { axios } from '../../api';

export function useVPOS() {
  const mutation = useMutation<any, AxiosError, any>(async (info) => {
    const { data } = await axios.post('', info);
    console.log('data: ', data);
    
    return data;
  });
  return mutation;
}
