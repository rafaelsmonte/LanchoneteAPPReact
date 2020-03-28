import { create } from 'apisauce';
const api = create({
    baseURL: 'http://192.168.0.102:3000/',
});

api.addResponseTransform(response=> {

    if(!response.ok) 
        throw response;
});

export default api;