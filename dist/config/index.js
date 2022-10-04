import dotenv from 'dotenv';
dotenv.config();
// interface config {
//   NODE_ENV: String,
//   port: String,
// }
const config = {
    NODE_ENV: process.env.NODE_ENV,
    port: process.env.PORT,
};
export default config;
