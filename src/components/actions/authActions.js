import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, REGISTER_SUCCESS, REGISTER_FAIL } from './types';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

export const loginUser = (email, password) => async dispatch => {
  try {
    const res = await axios.post(`${API_URL}/auth/login`, { email, password });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    return res.data;
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response ? err.response.data.message : err.message
    });
    throw err;
  }
};
export const registerClient = (userData) => async dispatch => {
  try {
    const res = await axios.post(`${API_URL}/clients/register`, userData);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response ? err.response.data.message : err.message
    });
  }
};

export const registerTransporter = (userData) => async dispatch => {
  try {
    const res = await axios.post(`${API_URL}/transporters/register`, userData);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response ? err.response.data.message : err.message
    });
  }
};

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
  window.location.href = '/';
};
