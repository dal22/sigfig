/**
 * Created by daljeetsidhu on 21/09/2018.
 */
import { Selector } from 'testcafe';

export default class Login {
    constructor () {
        this.userName = Selector('#username');
        this.password = Selector('#password');
        this.rememberMe = Selector('.check:nth-child(1)');
        this.loginSubmitButton = Selector('.btn >span:nth-child(1)');


        this.loginPageHeading = Selector( '.auth-title');
        this.invalidLoginErrorMessage = Selector( '.text-danger');


    }
}

