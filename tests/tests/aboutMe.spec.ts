import { test, expect, Locator } from '@playwright/test';

// set the following url to the index.html path
const baseUrl: string = '';
const aboutMeHeaderText: string = 'Hi, I\'m Veronika!';

/**
 * Check the About Me section on the main page
 */
test('Check About Me section', async ({ page }) => {
  /* --------------------Variables--------------------------------- */
  const aboutMeSection: Locator = page.locator('#about-me');

  /* --------------------Preconditions----------------------------- */
  await page.goto(baseUrl);

  /* --------------------Test Steps-------------------------------- */
  // Check the header of the main section
  await expect(aboutMeSection.locator('h2')).toContainText(aboutMeHeaderText);

  // Check the about me text is present
  // first() is required here because there are two paragraphs in the section
  await expect(aboutMeSection.locator('p').first()).toBeVisible();

  // Check the about me section contains a photo
  await expect(aboutMeSection.locator('#my-photo')).toBeVisible();
});