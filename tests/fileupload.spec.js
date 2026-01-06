const { test, expect } = require("@playwright/test");

test("Test File Upload", async function ({ page }) {
  await page.goto("https://the-internet.herokuapp.com/upload");
  await page.locator("#file-upload").setInputFiles("./files/image01.jpg");
  await page.locator("#file-submit").click();
  await page.waitForTimeout(2000);

  await expect(page.locator("h3")).toHaveText("File Uploaded!");
});
