/**
 * Created by daljeetsidhu on 23/09/2018.
 */

import { Selector } from 'testcafe';

export default class HeaderMenu {
    constructor () {

        this.sigFigLogo = Selector('.navbar-logo-horizontal');
        this.howWeHelp = Selector('#dLabel');
        this.retirement = Selector('#navbar > ul > li:nth-child(3) > a');
        this.pricing = Selector('#navbar > ul > li:nth-of-type(6) > a');
        this.whoWeAre = Selector('#navbar > ul > li:nth-of-type(7) > a');
        this.forEnterprise = Selector('#navbar > ul > li:nth-of-type(8) > a');
        this.signUpButtonCSS = Selector('#navbar > div > signup-button > button:nth-child(1)');
        this.signUpButtonXpath = Selector('//*[@id="navbar"]/div/signup-button/button[1]');

        this.loginButtonCSS = Selector('#navbar > div > a');
        this.loginButtonXpath = Selector('//*[@id="navbar"]/div/a');



    }
}

