import React, {ReactElement} from 'react';
import {Provider} from 'react-redux';
import {createStore as reduxCreateStore, Store} from 'redux';
import rootReducer from '.';

const createStore = (): Store => reduxCreateStore(rootReducer);

export default ({element}: {element: ReactElement}): ReactElement => (
  <Provider store={createStore()}>{element}</Provider>
);
