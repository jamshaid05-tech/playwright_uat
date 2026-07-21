import { defineConfig, devices } from '@playwright/test';
import { STORAGE_STATE_PATH } from './helpers/storageState.js';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Parallelism: single worker on CI for stability, half the cores locally */
  workers: process.env.CI ? 1 : '50%',
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html'],
    ['allure-playwright', {
      detail: true,
      outputFolder: 'allure-results',
      suiteTitle: false,
    }],
  ],
  /* Per-test timeout */
  timeout: 90 * 1000,
  /* Shared settings for all the projects below. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.URL,
    headless: true,
    viewport: { width: 1280, height: 720 },
    /* Fail an action after 15s instead of hanging until the test timeout */
    actionTimeout: 15 * 1000,
    /* Fail a navigation after 30s */
    navigationTimeout: 30 * 1000,
    trace: 'on-first-retry',
  },
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'setup',
      testMatch: /global\.setup\.ts/,
      teardown: 'teardown',
    },
    {
      name: 'teardown',
      testMatch: /global\.teardown\.ts/,
    },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        /* Reuse the authenticated state produced by the setup project */
        storageState: STORAGE_STATE_PATH,
      },
      dependencies: ['setup'],
    },
    /*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], storageState: STORAGE_STATE_PATH },
      dependencies: ['setup'],
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'], storageState: STORAGE_STATE_PATH },
      dependencies: ['setup'],
    },
    */
  ],
});
