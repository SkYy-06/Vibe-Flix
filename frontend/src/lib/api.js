import { axiosInstance } from "./axios.js";

// Signup API
export const signup = async (signupData) => {
  const response = await axiosInstance.post("/auth/signup", signupData);
  return response.data;
};

// Login API
export const login = async (loginData) => {
  const response = await axiosInstance.post("/auth/login", loginData);
  return response.data;
};

// Logout API
export const logout = async () => {
  const response = await axiosInstance.post("/auth/logout");
  return response.data;
};

// Get the authenticated user
export const getAuthUser = async () => {
  try {
    const res = await axiosInstance.get("/auth/me");
    return res.data;
  } catch (error) {
    console.log("Error in getAuthUser", error);
    return null;
  }
};

// Complete onboarding
export const completeOnboarding = async (userData) => {
  const response = await axiosInstance.post("/auth/onboarding", userData); // <-- use axiosInstance
  return response.data;
};

// Get the User's Friends
export async function getUserFriends() {
  const response = await axiosInstance.get("/users/friends");
  return response.data;
}

// Get the Recommended Users
export async function getRecommendedUsers() {
  const response = await axiosInstance.get("/users");
  return response.data;
}

// Get the Outgoing Requests

export async function getOutgoingFriendReqs() {
  const response = await axiosInstance.get("/users/outgoing-friend-requests");
  return response.data;
}

//  Send Friend Requests

export async function sendFriendRequest(userId) {
  const response = await axiosInstance.post(`/users/friend-request/${userId}`);
  return response.data;
}

// Get Friend Requests

export async function getFriendRequests(params) {
  const response = await axiosInstance.get("/users/friend-requests");
  return response.data;
}

// Accept Friend Requests

export async function acceptFriendRequest(requestId) {
  const response = await axiosInstance.put(
    `/users/friend-request/${requestId}/accept`
  );
  return response.data;
}



// Get Stream Token

export async function getStreamToken() {
  const response = await axiosInstance.get("/chat/token");
  return response.data;
}
