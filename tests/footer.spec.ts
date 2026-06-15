import {
  test,
  expect,
} from "@playwright/test";

test("footer navigation", async ({
  page,
}) => {
  await page.goto("/");

  await page
    .getByText("Top Movies")
    .last()
    .click();

  await page.waitForTimeout(1000);

  await expect(
    page.locator("#top-movies")
  ).toBeVisible();
});