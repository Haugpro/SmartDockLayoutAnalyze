
import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';

// note: importing the style overrides does not make them local
//    they take effect in other modules also
import './gridStyleOverrides.css';

function generateData(first: any, last: any) {
   let data = new Array();
   let firstNames = [
      "Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter", "Lars", "Petra", "Martin", "Sven", "Elio", "Beate", "Cheryl", "Michael", "Guylene"
   ];
   let lastNames = [
      "Fuller", "Davolio", "Burke", "Murphy", "Nagase", "Saavedra", "Ohno", "Devling", "Wilson", "Peterson", "Winkler", "Bein", "Petersen", "Rossi", "Vileid", "Saylor", "Bjorn", "Nodier"
   ];
   let productNames = [
      "Black Tea", "Green Tea", "Caffe Espresso", "Doubleshot Espresso", "Caffe Latte", "White Chocolate Mocha", "Cramel Latte", "Caffe Americano", "Cappuccino", "Espresso Truffle", "Espresso con Panna", "Peppermint Mocha Twist"
   ];
   let priceValues = [
      "2.25", "1.5", "3.0", "3.3", "4.5", "3.6", "3.8", "2.5", "5.0", "1.75", "3.25", "4.0"
   ];
   for (let i = 0; i < last - first; i++) {
      let row: any = {};
      let productindex = Math.floor(Math.random() * productNames.length);
      let price = parseFloat(priceValues[productindex]);
      let quantity = 1 + Math.round(Math.random() * 10);
      row["id"] = 1 + first + i;
      row["firstName"] = firstNames[Math.floor(Math.random() * firstNames.length)];
      row["lastName"] = lastNames[Math.floor(Math.random() * lastNames.length)];
      row["productName"] = productNames[productindex];
      row["price"] = price;
      row["quantity"] = quantity;
      row["total"] = price * quantity;
      data[i] = row;
   }
   return data;
}

var lclCountCalls: number = 0;
function GetData(first: any, last: any) {
   lclCountCalls++;
   console.log( "count calls: " + lclCountCalls  + "first: " + first + "last: " + last );
   return generateData(first, last);
}


class TrialVeryBigGridVirtualDataSourceIsFunction extends React.Component {
   scrolling = 'virtual';
   dataSource = new window.Smart.DataAdapter({
      virtualDataSourceLength: 1000000,
      virtualDataSourceCache: true,

      virtualDataSource: function (resultCallbackFunction: any, details: any) {
         setTimeout(function () {
            resultCallbackFunction({
               dataSource: GetData(details.first, details.last)
            });
         }, 100);   // 10 or 100
      },
      dataFields: [
         'id: number',
         'firstName: string',
         'lastName: string',
         'productName: string',
         'quantity: number',
         'price: number',
         'total: number'
      ]
   });
   layout = {
      rowHeight: 20,
      columnHeight: 60,
   };
   selection = {
      enabled: true,
      action: 'click',
      allowColumnHeaderSelection: false,
      allowRowSelection: true,
      mode: "one",
   };
   columns = [
      'id',
      { label: 'First Name', dataField: 'firstName'},
      { label: 'Last Name', dataField: 'lastName'},
      { label: 'Product', dataField: 'productName'},
      { label: 'Quantity', dataField: 'quantity'},
      { label: 'Unit Price', dataField: 'price', cellsFormat: 'c2'},
      { label: 'Total', dataField: 'total', cellsFormat: 'c2'}
   ];

   init() {
   }

   componentDidMount() {
      this.init();
   }

   render() {
      return (
         <div>
            {/*<div className="demo-description">TrialVeryBigGridVirtualDataSourceIsFunction: 100 MIO data is created and loaded on demand while scrolling</div>*/}
            <div>TrialVeryBigGridVirtualDataSourceIsFunction: 100 MIO data is created and loaded on demand while scrolling</div>
            <Grid id="grid"
                  scrolling={this.scrolling}
                  dataSource={this.dataSource}
                  layout={this.layout}
                  selection={this.selection}
                  columns={this.columns}></Grid>
         </div>
      );
   }
}

export default TrialVeryBigGridVirtualDataSourceIsFunction;
