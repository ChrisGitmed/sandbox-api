import dotenv from 'dotenv';
dotenv.config()

const config = {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
};

export default config;

