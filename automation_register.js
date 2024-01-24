const { Builder, By, until } = require("selenium-webdriver");

async function registerUser() {
  const driver = new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://localhost:8080/register");

    await driver.findElement(By.id("rfcReg")).sendKeys("11111111111111111111"); // Replace 'YourRFC' with the desired value
    await driver.findElement(By.id("companyName")).sendKeys("YourCompanyName"); // Replace 'YourCompanyName' with the desired value
    await driver.findElement(By.id("name")).sendKeys("Cesar");
    await driver.findElement(By.id("last_name_pat")).sendKeys("Fernandez");
    await driver.findElement(By.id("last_name_m")).sendKeys("YourLastNameM"); // Replace 'YourLastNameM' with the desired value
    await driver.findElement(By.id("phone")).sendKeys("0000000000000000"); // Replace 'YourPhoneNumber' with the desired value
    await driver.findElement(By.id("user_name")).sendKeys("YourUserName"); // Replace 'YourUserName' with the desired value

    // Generate a unique email using a timestamp
    const timestamp = new Date().getTime();
    const email = `mail@mail.com`;
    await driver.findElement(By.id("email")).sendKeys(email);

    await driver.findElement(By.id("password")).sendKeys("123");
    await driver.findElement(By.id("passwordConfirmation")).sendKeys("123");
    await driver.findElement(By.id("registrar")).click();

    // Wait for the login page to load (adjust the selector if needed)
    await driver.wait(until.elementLocated(By.id("login-form")), 10000);

    console.log("Form submitted successfully. Redirected to login page.");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Close the browser
    await driver.quit();
  }
}

registerUser();
