/**
 * Created by daljeetsidhu on 21/09/2018.
 */

import { Selector } from 'testcafe';

export default class Home {
    constructor () {


        this.signUpUsingCssClassName = Selector('.signup-button-container');
        this.signUpUsingXpathClassName = Selector('//signup-button[@class='/signup-button-container/']');

    }
}
