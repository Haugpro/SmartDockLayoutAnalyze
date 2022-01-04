import React from "react";
import { Button } from 'smart-webcomponents-react/button';
import { Smart, Grid } from 'smart-webcomponents-react/grid';
import { GetData, GetDataRange } from './utilities/CreateData';

import './app.css';


class CompTestChangeDataset_virtual extends React.Component {

   grid: Object;
   dataCount: number = 500;

   constructor(props) {
      super(props);
      this.grid = React.createRef();
      this.dataAdapter = this.createDataAdapter();
   }

  scrolling = 'virtual';

   dataAdapter = {};

   createDataAdapter = () => {
      console.log( `createDataAdapter called 1  this: ${this.dataCount}`);
      return  new window.Smart.DataAdapter({
         // this was a tough ride to get th components state down to the
         // 'resultCallbackFunction'. We can't pass the this.state of the outer component,
         // we need to make it inner to the DataAdapter config structure
         //outerCompState: this.state,  // by haug - unofficial

         virtualDataSourceLength: this.dataCount,
         virtualDataSourceCache: true,
        virtualDataSource: function (resultCallbackFunction: any, details: any) {
            console.log("!!!!!! DEBUG virtual data source called");
            setTimeout(function () {
               resultCallbackFunction({
                  dataSource: GetDataRange(details.first, details.last),// GetData1(details.first, details.last)
               });
            }, 10);   // 10ms or 100ms
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
      }, this);
      console.log( "createDataAdapter called 2");
   }


   columns = [{
      label: 'First Name',
      dataField: 'firstName',
      columnGroup: 'name'
   },
      {
         label: 'Last Name',
         dataField: 'lastName',
         columnGroup: 'name'
      },
      {
         label: 'Product',
         dataField: 'productName',
         columnGroup: 'order'
      },
      {
         label: 'Quantity',
         dataField: 'quantity',
         columnGroup: 'order'
      },
      {
         label: 'Unit Price',
         dataField: 'price',
         cellsFormat: 'c2',
         columnGroup: 'order'
      },
      {
         label: 'Total',
         dataField: 'total',
         cellsFormat: 'c2',
         columnGroup: 'order'
      }
   ]

   update() {
      this.dataCount = 50;
      this.grid.current.dataSource = this.createDataAdapter();
   }

   updateFirstRow() {
      this.grid.current.dataSource.update(0, GetData(1)[0]);
   }

   updateFirstCell() {
      this.grid.current.dataSource[0].firstName = "Johny";
   }

   clear() {
      this.grid.current.dataSource = null;
   }

   componentDidMount() {

   }

   render() {
      return (
         <div>
            <div>The Grid in this demo displays data in a series of rows and columns. This
               is the simplest case when the Grid is bound to a local data source.</div>
            <Grid ref={this.grid}
                  scrolling={this.scrolling}
                  dataSource={this.dataAdapter}
                  columns={this.columns}
            >
            </Grid>
            <div className="options">
               <div className="option">
                  <Button onClick={this.update.bind(this)} id="updateBtn">Update New DataSource</Button>
               </div>
               <div className="option">
                  <Button onClick={this.updateFirstRow.bind(this)} id="updateRowBtn">Update First Row Data</Button>
               </div>
               <div className="option">
                  <Button onClick={this.updateFirstCell.bind(this)}>Update First Cell</Button>
               </div>
               <div className="option">
                  <Button onClick={this.clear.bind(this)} id="clearBtn">Clear Data</Button>
               </div>
            </div>
         </div>
      );
   }
}

export default CompTestChangeDataset_virtual;

