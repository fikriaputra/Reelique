import {
  test,
  expect,
} from "@playwright/test";

test("open movie detail", async ({
  page,
}) => {
  await page.goto("/");

  await page
    .locator('a[href^="/movies/"]')
    .first()
    .click();

  await expect(
    page.locator("#movie-detail")
  ).toBeVisible();
});