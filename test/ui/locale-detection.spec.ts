import { test, expect } from '@playwright/test';
import { BASE_URL } from './config';

const url = (path = '') => `${BASE_URL}${path}`;

test.describe('locale detection', () => {
  test.describe('en', () => {
    test.use({ locale: 'en' });
    test('base locale', async ({ page }) => {
      await page.goto(BASE_URL);

      expect(page.url()).toBe(url('en/'));
    });
  });

  test('remembers override setting', async ({ page }) => {
    await page.goto(BASE_URL);
    expect(page.url()).toBe(url('en/'));
  });
});
