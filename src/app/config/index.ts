import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  node_env: process.env.NODE_ENV,
  salt_rounds: process.env.PASSWORD_SALT_ROUNDS,
  jwt_access_secret: process.env.JWT_ACCESS_TOKEN_SECRET,
  jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRATION,
};
