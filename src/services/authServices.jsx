// src/services/authServices.js
import apiClient from '../api/apiClient';

export const registerUser = async (userData) => {
    try {
        const response = await apiClient.post('/auth/register', userData);
        return response.data;
    } catch (error) {
        console.error("Registration error details:", error);
        throw error.response?.data?.message || 'Registration failed. Please try again.';
    }
};

export const loginUser = async (credentials) => {
    try {
        // Step 1: Authenticate and get token
        const response = await apiClient.post('/auth/login', credentials);
        const { token } = response.data;

        if (!token) {
            throw new Error("JWT missing in response");
        }

        // Step 2: Temporarily set token in localStorage for use in next request (interceptor will pick it up)
        localStorage.setItem('jwt', token);

        // Step 4: Cleanup or return structured data
        const userData = {
            username: credentials.username,
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
