import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const ShopsTable = props => (
  <div>
    <ReactTable
      data={props.data}
      columns={[
        {
          Header: 'Basic',
          columns: [
            {
              Header: 'Name',
              accessor: 'name'
            }
          ]
        }
      ]}
      getTdProps={(state, rowInfo, column, instance) => {
        return {
          onClick: e => console.log('Cell - onClick', rowInfo.row)
        };
      }}
      defaultPageSize={10}
      className="-striped -highlight"
    />
    <br />
  </div>
);
export default ShopsTable;
