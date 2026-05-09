import { chromium, test as playwrightTeardown } from '@playwright/test';
import { join } from 'path';
import { existsSync, readdirSync, unlinkSync } from 'fs';

playwrightTeardown('Teardown', async () => {

  const browser = await chromium.launch();
  const context = await browser.newContext({ storageState: './.auth/storageState.json' });
  const page = await context.newPage();

  // No specific teardown actions needed since storage state is saved in global setup
  console.log('Global teardown started.');

  const testFolderPath = join(process.cwd(), '.auth');
  if (existsSync(testFolderPath)) {
    console.log('Cleaning up storage state files in .auth folder.');
    const files = readdirSync(testFolderPath);

    if (files.length > 0) {
      console.log(`Deleting file(s) ${files.length} from .auth folder.`);
      for (const file of files) {
        const filePath = join(testFolderPath, file);
        unlinkSync(filePath);
      }
      console.log('Storage state files deleted successfully.');
    } else {
      console.log('No files found in .auth folder to delete.');
    }
  } else {
    console.log('.auth folder does not exist. No cleanup needed.');
  }
});