/**
 * Created by daljeetsidhu on 21/09/2018.
 */

import { Selector } from 'testcafe';

import Page from './pages/Page';
import Login from './pages/Login';
import HeaderMenu from './pages/HeaderMenu';



const page = new Page();
const login = new Login();
const headerMenu = new HeaderMenu();

fixture `Getting Started`
    .page `http://www.sigfig.com`;

/*test('My first test', async t => {

    await t
        .click(headerMenu.loginButtonCSS)

});*/

test('Sigfig test - LOGIN', async(t) => {
    //async before a function means it will return a promise


    await t
    //the await makes javascript wait for the t promise to settle and then returns its result
        .click(headerMenu.loginButtonCSS)
        .expect(login.loginPageHeading.innerText).eql('Log in to SigFig')

        .expect(login.userName.exists).ok('login username exists')

        .expect(login.password.exists).ok('login password exists')
        // .expect(password1.exists).ok()

        .typeText(login.userName, 'dal')
        .typeText(login.password, 'dalspassword')
        .click(login.loginSubmitButton)
        .expect(login.invalidLoginErrorMessage.innerText).contains('The username and password you entered')

});

/*
test('Meet The team', async t => {

    //navigate to homepage
    //click on "Who we are" from the header menu
    //Select the last person in the team
    //Grab team members name
    //make an assertion to on "Tung-Huy La" name



    await t
        .click(page.userName)
});
*/
