/**
 * Created by daljeetsidhu on 21/09/2018.
 */

import { Selector } from 'testcafe';

export default class InvestWithSigFig {
    constructor () {

        this.age = Selector('.text-nowrap');
        this.term = Selector('.simple-questionnaire-input-wrapper :nth-child(2) > span:nth-child(2)');

    }
}
