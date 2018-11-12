import axios from 'axios';
let http = {
    getCaptcha: '',
    onRegister: '',
}
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
export default http;


