const { Given, When , Then } = require('@cucumber/cucumber');
const commonLocators = require('../page-objects/common-locators');

When('I click on {string} button', { timeout: 10 * 1000 }, async function(buttonName) {
  await commonLocators.clickButton(buttonName);
});

When('I click on {string} link', { timeout: 10 * 1000 }, async function(linkName) {
  await commonLocators.clickLink(linkName);
});

When('I click on Background Environmental Music link', { timeout: 10 * 1000 }, async function() {
  await commonLocators.clickLinkBackgroundEnvironmentalMusic();
});

Then('I should see {string} heading', { timeout: 10 * 1000 }, async function(headingName) {
  await commonLocators.h1heading(headingName);
});

Then('I should see {string} link', { timeout: 10 * 1000 }, async function(headingName) {
  await commonLocators.a_heading(headingName);
});

Then('I should see {string} Heading', { timeout: 10 * 1000 }, async function(headingName) {
  await commonLocators.h2heading(headingName);
});

Then('I should see {string} line', { timeout: 10 * 1000 }, async function(headingName) {
  await commonLocators.span_heading(headingName);
}); 

When('I fill {string} field with {string} on Upload Track Page', { timeout: 10 * 1000 }, async function(fieldName, text) {
  const randomNumber = Math.floor(Math.random() * 10000) + 1;
  let locatorName;
  if(fieldName=="Song Title"){
      locatorName= 'song_title' 
  }
  else if(fieldName=="Unique Alias"){
    locatorName= 'song_alias'
    text = text + randomNumber;
  }
  else if(fieldName=="ISRC"){
  locatorName= 'song_isrc' 
}
 await commonLocators.inputFields(locatorName, text)
});

When('I select {string} from the dropdown', { timeout: 10 * 1000 }, async function(value) {
  await commonLocators.selectValue(value);
});

When('I select {string} from the genre1 dropdown', { timeout: 10 * 1000 }, async function(value) {
  await commonLocators.selectValueGenre1(value);
});

When('I select {string} from the genre2 dropdown', { timeout: 10 * 1000 }, async function(value) {
  await commonLocators.selectValueGenre2(value);
});

When('I select {string} from the genre3 dropdown', { timeout: 10 * 1000 }, async function(value) {
  await commonLocators.selectValueGenre3(value);
});

When('I accept Terms & Conditions', { timeout: 10 * 1000 }, async function() {
  await commonLocators.termsConditions();
});

When('I upload the song', { timeout: 10 * 1000 }, async function() {
  await commonLocators.songUpload();
});

When('I fill {string} textarea with {string} on {string} Page', { timeout: 10 * 1000 }, async function(fieldName, text, pageName) {
  let locatorName;
  if(fieldName=="Song Information"){
      locatorName= 'song_desc' 
  }
  else if(fieldName=="Profile Description"){
    locatorName= 'profile' 
  }
  else if(fieldName=="Content"){
    locatorName= 'umsg' 
  }
 await commonLocators.textarea(locatorName, text)
});

When('I click on Submit button', { timeout: 10 * 1000 }, async function() {
  await commonLocators.submitButton();
});

When('I fill {string} field with {string} on Profile Settings Page', { timeout: 10 * 1000 }, async function(fieldName, text) {
  const randomNumber = Math.floor(Math.random() * 10000) + 1;
  let locatorName;
  if(fieldName=="Full Name"){
      locatorName= 'artiste_name' 
  }
  else if(fieldName=="Company Name"){
    locatorName= 'artiste_comp'
  }
  else if(fieldName=="Genres"){
    locatorName= 'genres' 
  }
  else if(fieldName=="Alternate Name"){
    text = text + randomNumber;
    locatorName= 'artiste_alt' 
  }
  else if(fieldName=="Phone No"){
    locatorName= 'artiste_tel' 
  }
  else if(fieldName=="Instruments"){
    locatorName= 'instruments' 
  }
  else if(fieldName=="Showcase Link"){
    locatorName= 'showcase' 
  }
  else if(fieldName=="Paypal Email"){
    locatorName= 'artiste_paypal' 
  }
 await commonLocators.inputFields(locatorName, text)
});

When('I click on Save Changes Button', { timeout: 10 * 1000 }, async function() {
  await commonLocators.SaveChangesButton();
});

When('I click on Logout Button', { timeout: 10 * 1000 }, async function() {
  await commonLocators.logoutButton();
});

Then('I should see {string} on the screen', { timeout: 10 * 1000 }, async function(headingName) {
  await commonLocators.p_heading(headingName);
});

When('I fill {string} field with {string} on Contact Us Page', { timeout: 10 * 1000 }, async function(fieldName, text) {
  const randomNumber = Math.floor(Math.random() * 10000) + 1;
  let locatorName;
  if(fieldName=="Name"){
      locatorName= 'unam' 
  }
  else if(fieldName=="Corporate Email"){
    locatorName= 'ueml'
  }
  else if(fieldName=="Contact No"){
  locatorName= 'uctt' 
  }
  else if(fieldName=="Website"){
    locatorName= 'uweb' 
  }
  else if(fieldName=="Subject"){
    locatorName= 'usbj' 
  }
 await commonLocators.inputFields(locatorName, text)
});

When('I click on {string} image on the homepage', { timeout: 10 * 1000 }, async function(imageName) {
  let locatorName;
  if(imageName=="Musician"){
    locatorName= 'images/musician.jpg' 
  }
  else if(imageName=="BusinessMan"){
    locatorName= 'images/businessman.jpg'
  }
 await commonLocators.imageClick(locatorName)
});