import { test, expect } from '@playwright/test';
import { AleatoirPage } from '../pages/aleatoir';


test('test', async ({ page }) => {
    const Ale = new AleatoirPage(page)

    await Ale.toConnect()
    //await page.waitForTimeout(30000)
    await Ale.clickOnAleatoir()
    await Ale.checkUrlChanged



    //await page.waitForTimeout(10000)
    const facebookWidget = page.locator('div:nth-child(5) > #notes > #small_nav > #social_network > .socialize-this > li:nth-child(3) > a')
    const twitterWidget = page.locator('div:nth-child(5) > #notes > #small_nav > #social_network > .socialize-this > li:nth-child(4) > a')
    const tumblrWidget = page.locator('div:nth-child(5) > #notes > #small_nav > #social_network > .socialize-this > li:nth-child(5) > a')

    expect(facebookWidget).toBeTruthy();
    expect(twitterWidget).toBeTruthy();
    expect(tumblrWidget).toBeTruthy();
});