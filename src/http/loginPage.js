import axios from 'axios';
let http = {
    getImage: '',
}
http.getImage = function () {
    return new Promise((reslove, reject) => {
        axios.get("http://120.79.177.224:3000/api/bingPic").then((res) => {
            reslove(res)
        })
    })
}
export default http;