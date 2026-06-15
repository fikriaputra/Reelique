import {
  test,
  expect,
} from "@playwright/test";

test.use({
  viewport: {
    width: 390,
    height: 844,
  },
});

test("mobile navbar", async ({
  page,
}) => {
  await page.goto("/");

  await expect(
    page.locator("header")
  ).toBeVisible();
});