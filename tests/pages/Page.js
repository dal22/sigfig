/**
 * Created by daljeetsidhu on 21/09/2018.
 */
import { Selector } from 'testcafe';

export default class Page {
    constructor () {
        this.username = Selector('#username');
    }
}
