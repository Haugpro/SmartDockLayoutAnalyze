import React from "react";

import './FlexDesktopLayout.css';
import TrialCompDockingLayout from "./trialCompDockingLayout";

class CompFlexDesktopLayout extends React.Component {
   init() {
   }

   componentDidMount() {
   }

   render() {

      return (
         <div id="app-main-container">
            <div id="app-main-menu">
               <div className="menu-item">File</div>
               <div className="menu-item">Edit</div>
               <div className="menu-item">View</div>
               <div className="menu-item">Help</div>
            </div>
            <div id="app-main-area">
{/*
               <div id="app-sideBar">
                  <h2 className="sidebar-header">Home</h2>
                  <ul>
                     <li className="active">File1.txt</li>
                     <li>File2.txt</li>
                     <li>File3.txt</li>
                  </ul>
               </div>
*/}
               <div id="app-content">
                  <TrialCompDockingLayout/>
               </div>
            </div>
            <div id="app-statusbar">
               <i>this is the status bar</i>
            </div>
         </div>
      );
   }
}

export default CompFlexDesktopLayout;
