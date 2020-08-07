import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { GlobalStyles } from './GlobalStyles';
import { Logo } from './components/Logo/index';
import { ListOfCategories } from './components/ListOfCategory/index';
import ListOfPhotoCards  from './components/ListOfPhotoCards/index';

import PhotoCardWithQuery from './containers/PhotoCardWithQuery'

const App = () =>{
   const urlParams = new window.URLSearchParams(window.location.search)
   const detailId = urlParams.get('detail')
   

   return(
   <>
        <GlobalStyles />
        <Logo />
	
   
       {
            detailId
            ? <PhotoCardWithQuery photoIdOnly={Number(detailId)} />
            : <>
                <ListOfCategories />
                <ListOfPhotoCards categoryFilter="all"/>
             </>
	}
        
        
    </>)
}

export default App;
