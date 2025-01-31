import axios from "axios";

const API_URL = 'https://api.datavortex.nl/cocktailz'
const API_KEY = import.meta.env.VITE_API_KEY;


export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/users`, userData, {
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': `${API_KEY}`,
            }});

        return response.data;
    } catch (error) {
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

        const { jwt: token } = response.data;


        if (!token) {
            throw new Error("JWT missing in response");
        }

        const userResponse = await axios.get(`${API_URL}/users/${credentials.username}`,  {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
                'X-Api-Key': `${API_KEY}`,
            },
        });



        const user = userResponse.data;

        const userData = {
            username: user?.username || 'Unknown User',
            email: user?.email || 'No email provided',
        };

        return {
            token,
            user: userData,
        };
    } catch (error) {
        console.error("Login error details:", error);

        if (error.response?.status === 400) {
            throw new Error("Invalid username or password. Please try again.");
        }

        throw error.response?.data?.message || 'Login failed. Please try again.';
    }
};