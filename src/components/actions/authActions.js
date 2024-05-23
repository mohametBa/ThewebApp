import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, REGISTER_SUCCESS, REGISTER_FAIL } from './types';

export const loginUser = (email, password) => async dispatch => {
  try {
    const res = await axios.post('/api/auth/login', { email, password });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.message
    });
  }
};

export const registerClient = (userData) => async dispatch => {
  try {
    const res = await axios.post('/api/clients/register', userData);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data.message
    });
  }
};

export const registerTransporter = (userData) => async dispatch => {
  try {
    const res = await axios.post('/api/transporters/register', userData);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data.message
    });
  }
};

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
