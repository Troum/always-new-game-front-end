import axios from 'axios';
import store from '../../store';

let $http = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}`,
    headers: {
        'X-Requested-With' : 'XMLHttpRequest'
    },
    withCredentials: false,
    crossDomain: false,
    params: {}
});

$http.interceptors.response.use(response => {
    return response;
}, error => {
        switch (error.response.status) {
            case 400:
                store.commit('emitted', {status: true, content: error.response.data});
                break;
            case 401:
            case 404:
            case 409:
                store.commit('alert', {message: error.response.data.error });
                break;
            case 403:
                break;
        }
});

const HttpService = {
    install(Vue) {
        Vue.prototype.$httpService = $http;
    }
};

export default (HttpService);
