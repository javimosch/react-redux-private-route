import React from 'react';
import faker from 'faker';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName()
  };
};

function makeData() {
  return range(100).map(d => {
    return {
      ...newPerson()
    };
  });
}

// Import React Table

export default class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: 'Name',
              columns: [
                {
                  Header: 'First Name',
                  accessor: 'firstName'
                },
                {
                  Header: 'Last Name',
                  id: 'lastName',
                  accessor: d => d.lastName
                }
              ]
            }
          ]}
          getTdProps={(state, rowInfo, column, instance) => {
            return {
              onClick: e =>
                console.log('Cell - onMouseEnter', {
                  state,
                  rowInfo,
                  column,
                  instance,
                  event: e
                })
            };
          }}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
      </div>
    );
  }
}
