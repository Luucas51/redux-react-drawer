import React from 'react';
import reactDom from 'react-dom';
import { Provider } from 'react-redux';
import PastasContainer from './Components/PastasContainer/PastasContainer';
import PastasContainerWithHook from './Components/PastasContainerWithHook/PastasContainerWithHook';
import RicesContainerWithHook from './Components/RicesContainerWithHook/RicesContainerWithHook';
import store from './redux/store';


const App = () => {
    return (
        <Provider store={store}>
            <div>
                {/* <PastasContainer/> */}
                <PastasContainerWithHook/>
                <RicesContainerWithHook/>
            </div>
        </Provider>
    );
};

reactDom.render(<App />, document.getElementById('root'));