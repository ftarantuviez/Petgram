import React from 'react';

import { GlobalStyles } from './GlobalStyles';
import { Logo } from './components/Logo/index';
import { ListOfCategories } from './components/ListOfCategory/index';
import { ListOfPhotoCards } from './components/ListOfPhotoCards/index';

const App = () =>(
    <>
        <GlobalStyles />
        <Logo />
        <ListOfCategories />
        <ListOfPhotoCards />
    </>
)

export default App;