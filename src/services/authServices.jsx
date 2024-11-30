import axios from 'axios';

const API_URL = 'https://api.datavortex.nl/cocktailz'
const API_KEY = import.meta.env.VITE_API_KEY;

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/users`, userData, {
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': `${API_KEY}`,
            }});
        console.log(response)
        return response.data;
    } catch (error) {
        console.log('Registration error details:', error.response ? error.response.data : error.message);
        console.error("Registration error details:", error);
        throw error.response?.data?.message || 'Registration failed. Please try again.';
    }
    };

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/users/authenticate`, credentials, {
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': `${API_KEY}`,
            },
        });

        console.log("Response data:", response.data);

        const { jwt: token } = response.data;
        const userData = response.data.user || { username: 'sampleUser' };

        if (!token) {
            throw new Error("JWT missing in response");
        }



        return  {
            token,
            user: userData,
        };
    } catch (error) {
        console.error("Login error details:", error);
        throw error.response?.data?.message || 'Login failed. Please try again.';
    }

};