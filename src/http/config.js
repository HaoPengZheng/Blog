import axios from 'axios'

const loaclUrl = "http://loaclhost:3000/";
const remoteUrl = "http://120.79.177.224:3000/";
axios.defaults.baseURL = remoteUrl;