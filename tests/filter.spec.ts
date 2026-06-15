import {
  test,
  expect,
} from "@playwright/test";

test("filter action movies", async ({
  page,
}) => {
  await page.goto("/");

  await page
  .getByRole("button", {
    name: "Action",
  })
  .click();

await expect(
  page.locator("#movies")
).toBeVisible();
});