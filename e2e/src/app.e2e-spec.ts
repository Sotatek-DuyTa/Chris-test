import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';
// check App
describe("new App", () => {
  it('goPage', () => {
    browser.get("http://localhost:4200/home");
  })
  it("checkButtonLeft", () => {
    expect(element(by.id('swipeLeft')).isPresent()).toBe(true);
  });
  it("checkButtonRight", () => {
    expect(element(by.id('swipeRight')).isPresent()).toBe(true);
  });
  it("clickLeft", async () => {
    await expect(element(by.className('left')).click());
  });
  it("clickRight", async () => {
    await expect(element(by.className('right')).click());
  });
});
// study caculator
describe("caculator", () => {
  it("study e2e", () => {
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys('15');
    element(by.model('operator')).sendKeys('/');
    element(by.model('second')).sendKeys('5');
    element(by.buttonText('Go!')).click();
    expect(element(by.binding('latest')).getText())
  })
});
// study form
describe("Login",()=>{
  browser.get("http://erp_service_dev.maccaerp.com:6688/auth/login");
  element(by.id('username')).sendKeys('0336137311');
  element(by.id('password')).sendKeys('password1');
  browser.sleep(1000)
  element(by.className('signIn')).click()
  browser.sleep(5000)
})
