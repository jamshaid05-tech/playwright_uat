import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Only load .env file if it exists (local dev). On CI, env vars come from GitHub Secrets.
const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath, override: false });

export const URL = process.env.URL as string;
export const EMAIL = process.env.EMAIL as string;
export const PASSWORD = process.env.PASSWORD as string;

if (!URL || !EMAIL || !PASSWORD) {
  throw new Error('Missing URL, EMAIL, or PASSWORD in environment variables');
}
