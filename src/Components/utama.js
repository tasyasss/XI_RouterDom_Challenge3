// Components/utama.js
import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Beranda from './beranda';
import Data from './data';
import Protokol from './protokol';

const Utama = () => (
    <Switch>
        <Route exact path="/beranda" component={Beranda} />
        <Route exact path="/data" component={Data} />
        <Route exact path="/protokol" component={Protokol} />
    </Switch>
)
export default Utama;
