import { StreamChat } from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  console.error("Stream API key or Secret is missing");
}

// with this function we can communicate with our stream application
const streamClient = StreamChat.getInstance(apiKey, apiSecret);

// function to create a StreamUser
export const upsertStreamUser = async (userData) => {
  // upsert -> create or if already exist update
  try {
    await streamClient.upsertUser(userData);
    return userData;
  } catch (error) {
    console.error("Error upserting Stream User", error);
  }
};


export const generateStreamToken = (userId) => {
  try {
    // ensure userId is a string
    const userIdStr =  userId.toString()
    return streamClient.createToken(userIdStr)
  } catch (error) {
    console.error("Error generating Stream token" , error)
  }
}


