const { test, expect } = require("@playwright/test");

test("Test Mouse hover", async function ({ page }) {
  await page.goto("https://freelance-learn-automation.vercel.app/login");

  //login to the application
  await page.getByPlaceholder("Enter Email").type("admin@email.com");
  await page.getByPlaceholder("Enter Password").type("admin@123");
  await page.getByRole("button", { name: "Sign in" }).click();

  //hover on Manage and click on Manage Courses
  await page.locator("//span[normalize-space()='Manage']").hover();
  await page.locator("//a[normalize-space()='Manage Courses']").click();

  //verify the heading text
  await expect(page.locator("h1", { hasText: "Manage Courses" })).toBeVisible();
});
