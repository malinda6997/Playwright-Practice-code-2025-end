const { test, expect } = require("@playwright/test");

test("Valid Login Test", async function ({ page }) {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.locator("//button[normalize-space()='Login']").click();

  await expect(page).toHaveURL(/dashboard/);
});
