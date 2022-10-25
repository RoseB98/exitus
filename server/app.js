import  express  from "express";
import {API_VERSION} from "./constants.js";
import bodyParser from "body-parser";
import cors from "cors"

const app = express();

//export const app = express();


//Configure Body Parser 

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

// Configure static files

app.use(express.static("uploads"))

//configure header HTTP - CORS 

app.use(cors())

//router basic
//...*/

export default app;

