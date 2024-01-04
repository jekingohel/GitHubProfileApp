import axios, {AxiosInstance} from 'axios';

export const DefaultBaseURL: string = (() => {
  return 'https://api.github.com';
})();

const Comm: AxiosInstance = axios.create({
  baseURL: DefaultBaseURL,
  timeout: 600000, // value in milliseconds
  headers: {
    Accept: 'application/json',
    // "Content-type": "application/json"
  },
});

export default Comm;
