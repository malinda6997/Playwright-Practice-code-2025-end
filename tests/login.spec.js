const { test, expect } = require("@playwright/test");

test("Valid Login Test", async function ({ page }) {
  //Login to the application
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.locator("//button[normalize-space()='Login']").click();

  await page.waitForTimeout(5000);
  await expect(page).toHaveURL(/dashboard/);

  //Logout from the application
  await page.locator("//img[@class='oxd-userdropdown-img']").click();
  await page.getByText("Logout").click();

  await page.waitForTimeout(5000);
  await expect(page).toHaveURL(/login/);
});
