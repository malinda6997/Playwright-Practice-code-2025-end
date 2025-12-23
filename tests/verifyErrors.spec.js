const { test, expect } = require("@playwright/test");

test("Verify Error Messages on Invalid Login", async function ({ page }) {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.getByPlaceholder("Username").type("Admin");
  await page.getByPlaceholder("Password").type("wrongpassword");
  await page.locator("//button[normalize-space()='Login']").click();
  const errorMessage = await page
    .locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']")
    .textContent();

  console.log("Error Message Displayed: " + errorMessage);
  expect(errorMessage.includes("Invalid")).toBeTruthy();
});
