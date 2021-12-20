import axios from 'axios';

const baseUrl = 'http://localhost:3001';

export const getItems = async (token) => {
    const {
        data: { items },
    } = await axios.get(`${baseUrl}/v1/items/all`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return items;
};

export const login = async (email, password) => {
    const { data: userData } = await axios.post(`${baseUrl}/v1/auth/login`, {
        email,
        password,
    });

    return userData;
};

export const register = async (email, password, name) => {
    const { data } = await axios.post(`${baseUrl}/v1/auth/register`, {
        email,
        password,
        name,
    });
    return data.message;
};
