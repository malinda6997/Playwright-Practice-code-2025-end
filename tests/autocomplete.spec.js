const { test, expect } = require("@playwright/test");

test("Autocomplete functionality works correctly", async function ({ page }) {
  await page.goto("https://www.google.com/");

  // Fill the search
  await page.locator("textarea[name='q']").fill("playwright ");

  // WAIT for the specific list item to be visible before pressing keys
  await page.waitForSelector("ul[role='listbox'] li", { state: "visible" });

  // Now the keyboard actions will actually register
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Enter");
});
