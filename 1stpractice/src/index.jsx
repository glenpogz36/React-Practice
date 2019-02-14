// import React from "react";
// import ReactDOM from "react-dom";
// ReactDOM.render(
//     <div>
//         <h1>Help Queue</h1>
//         <h3>3a</h3>
//         <h3>Thato and Haley</h3>
//         <p><em>Firebase will not save record!</em></p>
//     </div>,
//     document.getElementById('react-app-root')
// );

//Parent Render//

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";

// ReactDOM.render(
//     <App />,
//     document.getElementById('react-app-root')
// );


//Builder Environemnt//

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('react-app-root')
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(App)
    });
}