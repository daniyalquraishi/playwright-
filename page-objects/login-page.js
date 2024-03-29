 locators = {
   "username_input": `input[name="usr"]`,
   "password_input": `input[name="pwd"]`,
   "sign_in_btn": `input[name="cmd"]`
 },
 credentials = {  
  "admin_email": "daniyalquraishi",
  "admin_password": "Vista123+"
}
 
 class LoginPage {

  async navigateToLoginScreen() {
   return await page.goto(global.BASE_URL);
  }

  async navigateToHomePage() {
    return await page.goto(global.HOMEPAGE_URL);
   }

  async submitLoginForm() {
    const element = await page.waitForSelector(locators.username_input);
    await page.fill(locators.username_input, credentials.admin_email);
    await page.fill(locators.password_input, credentials.admin_password);
    await page.click(locators.sign_in_btn);
  }

  async submitLoginFormwithinvalidcreds() {
    const element = await page.waitForSelector(locators.username_input);
    await page.fill(locators.username_input,'daniyal@expressinmusic.com');
    await page.fill(locators.password_input,'admin@79');
    await page.click(locators.sign_in_btn);
  }

  async eimImage(){
    let locator = `img[id="logoimg"]`
    await page.waitForSelector(locator);
    const visible = await page.isVisible(locator);
    return expect(visible).to.equal(true);
}
  
 }
module.exports = { LoginPage };