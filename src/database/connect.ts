import client from "./config";

const connectDatabase = async (): Promise<void> => {
  await client.connect();
  console.log("database connected!");
};

export default connectDatabase;
