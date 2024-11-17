// src/services/firebase/auth.service.js
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from './firebase';
import { toast } from 'react-toastify'; // Optional: For showing notifications

const register = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    toast.success("Registration successful!");
    return user;
  } catch (error) {
    console.error(error.message);
    toast.error(error.message);
    throw error;
  }
};

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    toast.success("Login successful!");
    return user;
  } catch (error) {
    console.error(error.message);
    toast.error(error.message);
    throw error;
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    toast.success("Logged out successfully!");
  } catch (error) {
    console.error(error.message);
    toast.error(error.message);
  }
};

const getCurrentUser = () => {
  return auth.currentUser;
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser
};

export default AuthService;
