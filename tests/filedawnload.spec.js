const { test, expect } = require("@playwright/test");

test("Test File Download", async function ({ page }) {
  await page.goto("https://the-internet.herokuapp.com/download");
  const downloadPromise = page.waitForEvent("download");
  await page.getByText("sample_upload.txt").click();
  const download = await downloadPromise;

  await download.saveAs(
    "F:PlaywrightPractice-01\\files\\" + download.suggestedFilename()
  );
});
