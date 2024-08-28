import axios from 'axios';

const getToken = () => {
    let token = localStorage.getItem("reachinbox-auth");
    return token ? JSON.parse(token) : ""; 
};

export const getMailList = () => {
    const token = getToken();
    return axios.get('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
        headers: {
            'authorization': `Bearer ${token}`
        }
    })
    .then(res => res.data.data)
    .catch(err => console.log(err));
};

export const getMailMessages = async (id) => {
    const token = getToken();
    return await axios.get(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${id}`, {
        headers: {
            'authorization': `Bearer ${token}`
        }
    })
    .then(res => res.data.data)
    .catch(err => console.log(err));
};

export const postMailMessages = async(id, messages) => {
    const token = getToken();
    return await axios.post(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${id}`, messages, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(res => {
        console.log("Posted:", res.data);
        return res.data; 
    })
    .catch(err => {
        console.log("Error occured!")
        console.error("Error:", err);
        throw err; 
    });
};

export const deleteMailResponse = async (id) => {
    const token = getToken();
    return axios.delete(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${id}`, {
        headers: {
            'authorization': `Bearer ${token}`
        }
    })
    .then(res => {
        console.log(res);
        return res;
    })
    .catch(err => console.log(err));
};

export const resetMail = () => {
    const token = getToken();
    return axios.get(`https://hiring.reachinbox.xyz/api/v1/onebox/reset`, {
        headers: {
            'authorization': `Bearer ${token}`
        }
    })
    .then(res => {
        console.log(res);
        return res;
    })
    .catch(err => console.log(err));
};
