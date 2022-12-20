import axios from 'axios';

const baseUrl =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:3001'
        : 'https://chingu-be.herokuapp.com';

// TODO: create axios instance to prevent calling for base url

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

export const registerAccount = async ({ email, password, name }) => {
    const { data } = await axios.post(`${baseUrl}/v1/auth/register`, {
        email,
        password,
        name,
    });
    return data.message;
};

export const savePost = async ({ title, body, id, userId }, token) => {
    const { data } = await axios.post(
        `${baseUrl}/v1/items/save`,
        { title, body, id, userId },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );
    return data.message;
};

export const updatePost = async ({ title, body, id, userId }, token) => {
    const { data } = await axios.put(
        `${baseUrl}/v1/items/update`,
        { title, body, id, userId },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );
    return data.message;
};

export const deletePost = async ({ id, userId }, token) => {
    const { data } = await axios.delete(`${baseUrl}/v1/items/delete`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        data: { id, userId },
    });
    return data.message;
};
