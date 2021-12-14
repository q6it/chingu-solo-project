import axios from 'axios';

const baseUrl = 'http://localhost:3001';

export const getItems = async () => {
    const {
        data: { items },
    } = await axios.get(`${baseUrl}/v1/items/all`, {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5lZSIsImlhdCI6MTYzODgxOTc2NywiZXhwIjoxNjQxNDExNzY3fQ.h2H4orej5wHyAyJbM7uffQTOfGP9XkLN6MLKO1W36V4`,
        },
    });

    return items;
};

export const login = async () => {
    const { data: userData } = await axios.post(`${baseUrl}/v1/auth/login`, {
        email: 'test@test.ee',
        password: 'hashed pass',
    });

    return userData;
};
