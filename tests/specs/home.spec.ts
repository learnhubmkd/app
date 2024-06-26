import { test, expect } from '@playwright/test';
import { BaseSpec } from './BaseSpec';

test.describe('Navigation checks', () => {
  let baseSpec: BaseSpec;

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext({});
    const page = await context.newPage();
    baseSpec = new BaseSpec(browser, context, page);
  });

  test('Check Github footer redirect', async () => {
    await baseSpec.homeSteps.homePage.show();
    const [githubPage] = await Promise.all([
      baseSpec.context.waitForEvent('page'),
      baseSpec.homeSteps.homePage.clickGithubFooterButton(),
    ]);

    await githubPage.waitForLoadState();
    await expect(githubPage).toHaveURL('https://github.com/learnhubmk');
  });
});
