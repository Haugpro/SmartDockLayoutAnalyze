import React from "react";
import ReactDom from "react-dom";

import { webFrame} from 'electron';

import 'smart-webcomponents-react/source/styles/smart.default.css';
import TrialVeryBigGridVirtualDataSourceIsFunction from "./trialVeryBigGridVirtualDataSourceIsFunction";

const mainElement = document.createElement('div');

document.body.setAttribute( "theme", "dark");
document.body.appendChild(mainElement);const App = () => {

   return (
      <div theme={"dark"}>
         <TrialVeryBigGridVirtualDataSourceIsFunction/>
      </div>
   )
}

ReactDom.render(<App />, mainElement);
