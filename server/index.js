import mongoose from "mongoose";
import {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  API_VERSION,
  IP_SERVER,
} from "./constants.js";

import app from  "./app.js";

const PORT = process.env.POST || 3977

mongoose.connect(
 `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/`,
 
  (error) => {
    if (error) throw error;
    
    app.listen(PORT, () => {
      console.log("####################");
      console.log("##### API REST #####");
      console.log("####################");
      console.log(`http://${IP_SERVER}:${PORT}/api/${API_VERSION}`)
    })
  }
);
