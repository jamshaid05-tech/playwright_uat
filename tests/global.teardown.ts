import { rm } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function globalTeardown() {
  const authDir = path.resolve(__dirname, '../.auth');
  try {
    await rm(authDir, { recursive: true, force: true });
    console.log('Auth directory deleted successfully');
  } catch (error) {
    console.error('Error deleting auth directory:', error);
  }
}

export default globalTeardown;