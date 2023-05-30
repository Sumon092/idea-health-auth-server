import mongoose from "mongoose";
import { app } from "./app";
import { port } from "./app";

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/idea_auth");
    console.log("database connected");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(`Failed to connect database`, error);
  }
}
main();
