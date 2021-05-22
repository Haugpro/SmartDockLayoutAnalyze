import React from "react";
import ReactDom from "react-dom";

import 'smart-webcomponents-react/source/styles/smart.default.css';
import CompFlexDesktopLayout from "./FlexDesktopLayout";

const mainElement = document.createElement('div');

document.body.appendChild(mainElement);const App = () => {

   return (
      <CompFlexDesktopLayout/>
   )
}

ReactDom.render(<App />, mainElement);
