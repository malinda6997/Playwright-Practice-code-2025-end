const { test, expect } = require("@playwright/test");

// test("01 Test Keyboard Events", async function ({ page }) {
//   await page.goto("https://www.google.com/");
//   await page.locator("textarea[name='q']").click();
//   await page.keyboard.type("Playwright Automation");
//   await page.keyboard.press("Enter");

// });

test("02 Test Keyboard Events", async function ({ page }) {
  await page.goto("https://www.google.com/");
  const searchBox = page.locator("textarea[name='q']");
  await searchBox.click();
  await page.keyboard.type("Playwright Automation");

  await page.waitForTimeout(800);

  // 2. Select all text
  await page.keyboard.press("Control+A");
  await page.waitForTimeout(800);

  // 3. Copy text
  await page.keyboard.press("Control+C");
  await page.waitForTimeout(800);

  // 4. Clear input field (VISIBLY)
  await searchBox.fill(""); // best practice
  await page.waitForTimeout(1200);

  // Assertion to prove field is empty
  await expect(searchBox).toHaveValue("");

  // 5. Paste copied text
  await page.keyboard.press("Control+V");
  await page.waitForTimeout(800);

  // 6. Press Enter
  await page.keyboard.press("Enter");
});
