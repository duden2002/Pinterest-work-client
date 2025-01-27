import axios from "axios"


export const checkSubscriptionStatus = async (userId) => {
  const response = await axios.get(`https://dka-pinterest-work-backend-e5b6f2c9ce66.herokuapp.com/auth/subscriptions/status/${userId}`, {
    withCredentials: true, // Передаем cookie с токеном
  });
  console.log(response.data)
  return response.data; // Ожидаем, что сервер вернет объект { isSubscribed: true/false }
}

export const subscribeToUser = async (userId) => {
  return axios.post(`https://dka-pinterest-work-backend-e5b6f2c9ce66.herokuapp.com/auth/subscribe/${userId}`, {}, {
    withCredentials: true, // Добавляем для передачи cookie
  });
};

export const unsubscribeFromUser = async (userId) => {
  return axios.post(`https://dka-pinterest-work-backend-e5b6f2c9ce66.herokuapp.com/auth/unsubscribe/${userId}`, {}, {
    withCredentials: true,
  });
};

export const getFollowers = async (userId) => {
  return axios.get(`https://dka-pinterest-work-backend-e5b6f2c9ce66.herokuapp.com/auth/followers/${userId}`, {
    withCredentials: true,
  });
};

export const getFollowing = async (userId) => {
  return axios.get(`https://dka-pinterest-work-backend-e5b6f2c9ce66.herokuapp.com/auth/following/${userId}`, {
    withCredentials: true,
  });
};