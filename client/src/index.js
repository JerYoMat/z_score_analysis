import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import responseBlob from './response.json'
import Client from './Client'

const initialState = {
  selectedHouse: null,
  houses: Client.getCompanies()
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_HOUSE':
      return {
        ...state,
        selectedHouse: action.house.id
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

function selectHouse(house) {
  return {
    type: 'SELECT_HOUSE',
    house
  };
}

const SchoolAdmin = ({
  houses,
  selectedHouse,
  selectHouse
}) => (
  <main>
    {houses.map(house => (
      <div
        key={house.id}
        onClick={() => selectHouse(house)}
      >
        <div>{house.companyname}</div>

      </div>
    ))}
  </main>
);

const mapState = state => ({
  houses: Object.values(state.houses),
  selectedHouse: state.selectedHouse
});

const ConnectedApp = connect(
  mapState,
  { selectHouse}
)(SchoolAdmin);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.querySelector('#root')
);