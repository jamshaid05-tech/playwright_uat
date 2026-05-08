import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const URL = process.env.URL as string;
export const EMAIL = process.env.EMAIL as string;
export const PASSWORD = process.env.PASSWORD as string;

if (!URL || !EMAIL || !PASSWORD) {
  throw new Error('Missing URL, EMAIL, or PASSWORD in environment variables');
}
