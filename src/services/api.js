import axios from 'axios';

export const getItems = async () => {
    const baseUrl = 'http://localhost:3001';
    const {
        data: { items },
    } = await axios.get(`${baseUrl}/v1/items/all`);
    return items;
};
