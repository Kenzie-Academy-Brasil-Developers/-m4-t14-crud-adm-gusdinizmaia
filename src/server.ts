import app from "./app";
import "dotenv/config";
import { connectDatabase } from "./database/index";

const port = parseInt(process.env.APP_PORT!);

app.listen(port, async () => {
  await connectDatabase();
  console.log("server is running");
});
