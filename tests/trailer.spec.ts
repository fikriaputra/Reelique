import {
  test,
  expect,
} from "@playwright/test";

test("open trailer modal", async ({
  page,
}) => {
  await page.goto("/");

  await page
    .locator('a[href^="/movies/"]')
    .first()
    .click();

  await page
    .getByRole("button", {
      name: /watch trailer/i,
    })
    .click();

  await expect(
    page.locator("iframe")
  ).toBeVisible({
    timeout: 10000,
  });
});