import {
  test,
  expect,
} from "@playwright/test";

test("search batman", async ({
  page,
}) => {
  await page.goto("/");

  const searchInput =
    page.locator(
      'input[placeholder="Search movies..."]'
    );

  await searchInput.fill("Batman");

  await page.waitForTimeout(3000);

  await expect(
    page.locator("text=Batman").first()
  ).toBeVisible();
});