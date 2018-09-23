/**
 * Created by daljeetsidhu on 21/09/2018.
 */

import { Selector } from 'testcafe';

export default class Team {
    constructor () {
        this.heading = Selector('.margin-topless');
        this.lastteamMember = Selector('#username');






        //use all selectors here with relative paths as opposed to absolute paths
        // find CSS by classname, id, child nodes, attributes

    }
}

