import React from "react";
import ReactDOM from "react-dom";
// no way without some default.css
import 'smart-webcomponents-react/source/styles/smart.default.css';
import CompTestChangeDataset from "./CompTestChangeDataset";
import CompTestChangeDataset_virtual from "./CompTestChangeDataset_virtual";

import './app.css';

const mainElement = document.createElement('div');
// document.body.setAttribute( "theme", "dark");
document.body.appendChild(mainElement);

var dataCount = 500;


class App extends React.Component {

   render() {
      return (
         <div>
            {/*<CompTestChangeDataset></CompTestChangeDataset>*/}
            <CompTestChangeDataset_virtual></CompTestChangeDataset_virtual>
         </div>
      );
   }
}

ReactDOM.render(<App />, mainElement);


