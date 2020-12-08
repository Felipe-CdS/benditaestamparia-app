import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import ReduxStore from './ReduxScripts/ReduxStore'
import StoreApp from './appReact/Main/StoreApp'

ReactDOM.render(   
        <Provider store={ReduxStore}>
                <StoreApp/>
        </Provider>
, document.getElementById("root"));