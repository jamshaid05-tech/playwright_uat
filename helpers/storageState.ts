import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export type Cookies = {
    name: string;
    value: string;
};

export interface StorageState {
    cookies: Cookies[];
}

export const STORAGE_STATE_PATH = path.resolve(__dirname, '../.auth/storageState.json');