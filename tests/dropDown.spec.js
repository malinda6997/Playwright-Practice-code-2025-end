const { test, expect } = require("@playwright/test");

test("Dropdown Selection Test(Single value)", async function ({ page }) {
  await page.goto("https://freelance-learn-automation.vercel.app/signup");

  await page.locator("#state").selectOption({ label: "Assam" });
  await page.waitForTimeout(2000);

  await page.locator("#state").selectOption({ value: "Goa" });
  await page.waitForTimeout(2000);

  await page.locator("#state").selectOption({ index: 4 });
  await page.waitForTimeout(2000);

  //method 01 to get the selected value
  // const value = await page.locator("#state").textContent();
  // console.log("All Dropdow Values :- " + value);
  // await expect(value.includes("Assam")).toBeTruthy();

  //method 02 to get the selected value
  // const state = await page.$("#state");
  // const allElements = await state.$$("option");

  // let status = false;

  // for (const element of allElements) {
  //   const value = (await element.textContent())?.trim();
  //   console.log("Dropdown Value:", value);

  //   if (value === "Manipur") {
  //     status = true;
  //     break;
  //   }
  // }

  // await expect(status).toBeTruthy();
});
