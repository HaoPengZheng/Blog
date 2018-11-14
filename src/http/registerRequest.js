import axios from 'axios';
import './config'
let http = {}
http.getCaptcha = function (api) {
    return new Promise((reslove, reject) => {
        axios.get(api).then((res) => {
            reslove(res)
        })
    })
}
http.onRegister = function (api, data) {
    console.log(data);
    return new Promise((reslove, reject) => {
        axios.post(api, data).then((res) => {
            reslove(res)
        })
            .catch(function (error) {
                console.log(error);
                if (error.response.data.code === 400) {
                    alert(error.response.data.msg)
                }
            });
    })
}
http.login = function (data) {
    return new Promise((resolve, reject) => {
        axios.post('/api/login', data).then((response) => {
            resolve(response)
        }).catch(err=>{
            reject(err);
        })
    })
}
export default http;


