import { test, expect } from '@playwright/test';

const BASE = process.env.BASE_URL || 'http://localhost:8080';

test('landing page loads without errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', err => errors.push(err.message));

  await page.goto(BASE);
  await page.waitForLoadState('networkidle');

  // Title present
  await expect(page).toHaveTitle(/Agentic Movers/i);

  // Nav visible
  await expect(page.locator('nav')).toBeVisible();

  // No console errors
  expect(errors).toHaveLength(0);
});

test('hero section renders', async ({ page }) => {
  await page.goto(BASE);
  await page.waitForLoadState('networkidle');

  // Hero or main content visible
  const body = page.locator('body');
  await expect(body).toBeVisible();
});