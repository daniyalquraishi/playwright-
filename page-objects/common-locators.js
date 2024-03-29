class commonLocators {

    async h1heading(headingName){
        let locator = `//h1[contains(., '${headingName}')]`
        await page.waitForSelector(locator);
        const visible = await page.isVisible(locator);
        return expect(visible).to.equal(true);
    }
  
    async h2heading(headingName){
        let locator = `//h2[contains(., '${headingName}')]`
        await page.waitForSelector(locator);
        const visible = await page.isVisible(locator);
        return expect(visible).to.equal(true);
    }
    
    async a_heading(headingName){
        let locator = `//a[contains(., '${headingName}')]`
        await page.waitForSelector(locator);
        const visible = await page.isVisible(locator);
        return expect(visible).to.equal(true);
    }

    async p_heading(headingName){
        let locator = `//p[contains(., '${headingName}')]`
        await page.waitForSelector(locator);
        const visible = await page.isVisible(locator);
        return expect(visible).to.equal(true);
    }

    async span_heading(headingName){
        let locator = `//span[contains(., '${headingName}')]`
        await page.waitForSelector(locator);
        const visible = await page.isVisible(locator);
        return expect(visible).to.equal(true);
    }

    async clickLink(itemName){
        await page.click(`//a[contains(., '${itemName}')]`)
    }

    async imageClick(imageName){
        await page.click(`img[src='${imageName}']`)
    }

    async clickLinkBackgroundEnvironmentalMusic(){
        await page.click(`xpath=(//a[contains(., 'Background Environmental Music')])[2]`);
    }

    async logoutButton(){
        await page.click(`xpath=(//a[contains(., 'Logout')])[3]`);
    }

    async clickButton(buttonName){
        await page.click(`//span[contains(., '${buttonName}')]`)
    }

    async spantext(text){
        let locator = `//span[contains(., '${text}')]`
        await page.waitForSelector(locator);
        const visible = await page.isVisible(locator);
        return expect(visible).to.equal(true);
    }

    async inputFields(locatorName, text){
        let locator = `input[name="${locatorName}"]`;
        await page.waitForSelector(locator);
        await page.click(locator);
        await page.fill(locator, text);
    }

    async selectValue(value) {
        await page.selectOption("select[name='language_id']", { value: `${value}` });
    }
    
    async selectValueGenre1(value){
        await page.selectOption("select[name='genre_id1']", { value: `${value}` });
      }

    async selectValueGenre2(value){
        await page.selectOption("select[name='genre_id2']", { value: `${value}` });
      }

    async selectValueGenre3(value){
        await page.selectOption("select[name='genre_id3']", { value: `${value}` });
      }

      async termsConditions(){
         await page.click(`input[name='readterms']`);
    }

    async songUpload(){
        //let filePath = 'C:/Users/waji.pk/Documents/test image.jpg';
        let filePath = 'C:/Users/daniy/Downloads/demosong.mp3';
        await page.setInputFiles(`input[name='song_full']`, filePath);
        await page.waitForTimeout(4000);
     }

     async textarea(locatorName, text){
        let locator = `textarea[name="${locatorName}"]`;
        await page.waitForSelector(locator);
        await page.click(locator);
        await page.fill(locator, text);
    }

    async submitButton(){
        await page.click(`input[name='cmd']`);
   }

   async SaveChangesButton(){
    await page.click(`input[name='cmd']`);
}
   }
  module.exports = new commonLocators ;