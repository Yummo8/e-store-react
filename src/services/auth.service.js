import { auth, protectedApi } from '../api';

const signUp = async (values) => {
  return auth.post('/signup', { ...values });
};

const signIn = async (values) => {
  return auth.post('/signin', { ...values });
};

const logout = async () => {
  return auth.post('/logout');
};

const checkAuth = async () => {
  return protectedApi.post('/auth');
};

export default { signUp, signIn, logout, checkAuth };
