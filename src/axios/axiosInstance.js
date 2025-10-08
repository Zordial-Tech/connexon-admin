import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.REACT_APP_API_BASE_URL ||
    "https://connexon-backend-mx9f.onrender.com",
  timeout: 10000, // ⏱️ sets a 10s timeout so requests never hang forever
});

// ✅ Attach token dynamically
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Handle expired token (401) instantly using alert
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Prevent multiple alerts if multiple API calls fail at once
      if (!window.sessionExpiredAlertShown) {
        window.sessionExpiredAlertShown = true;

        alert("⚠️ Your session has expired. Please log in again.");

        localStorage.removeItem("authToken");
        window.location.href = "/login";
        window.sessionExpiredAlertShown = false;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
