import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signup':
      return { token: action.payload, errorMessage: '' };
    default:
      return state;
  }
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      // make api request to sign up with email and password
      const response = await trackerApi.post('/signup', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      // if we sign up, modify our state, and say that we are authenticated
      dispatch({ type: 'signup', payload: response.data.token });
      // navigate to main flow
      navigate('TrackList');
    } catch (error) {
      // if signing up fails, we probably need to reflect an error message somewhere
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign up',
      });
    }
  };

const signin = (dispatch) => {
  return ({ email, password }) => {
    // make api request to sign in with email and password
    // if we sign in, modify our state, and say that we are authenticated
    // if signing in fails, we probably need to reflect an error message somewhere
  };
};

const signout = (dispatch) => {
  return () => {
    // somehow sign out
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: '' }
);
