import config from "../../common/config";

import mongoose from "mongoose";

const URI = config.DB_URI;

class MongoDB {
  async connect() {
    try {
      await mongoose.connect(URI as string);
      console.log("Database is running");
    } catch (error) {
      console.log(error);
    }
  }
}

export default new MongoDB();
