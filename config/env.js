import { config } from "dotenv";

config({path: `.env.${process.env.NODE_ENV || 'Development'}.local`}); // Load environment variables from .env file

export const {PORT, NODE_ENV, DB_URI, JWT_SECRET, JWT_EXPIRES_IN, ARCJET_KEY, ARCJET_ENV, QSTASH_URL, QSTASH_TOKEN, SERVER_URL, EMAIL_PASSWORD } = process.env; // Destructure the PORT variable from process.env