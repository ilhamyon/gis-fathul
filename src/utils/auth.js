import { message } from "antd";

const isBrowser = typeof window !== "undefined"; // Check if running in the browser

export const getToken = () => {
  return isBrowser ? localStorage.getItem("token") : null;
};

export const clearToken = () => {
  isBrowser && localStorage.removeItem("token");
};

export const deauthUser = () => {
	message.loading("Please wait...", 1).then(async () => {
	try {
        clearToken();
        localStorage.removeItem('relawanFathul_token');
        localStorage.removeItem('relawanFathul_user');
        localStorage.removeItem('typeUser');
        localStorage.removeItem('relawanFathul_id');
        localStorage.removeItem('relawanFathul_userData');
        window.location.replace('/');
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
	})
}

export const isAuthenticated = () => {
  if (typeof localStorage !== 'undefined') {
    const token = localStorage.getItem("relawanFathul_token");
    return !!token;
  } else {
    // Handle the case where localStorage is not available
    return false;
  }  
};