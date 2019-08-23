import { INITIAL_STATE } from './customersInitialState';
import { CustomersActions } from './customersActions';

const ACTION_HANDLERS = {
  [CustomersActions.GET_ALL_CUSTOMERS_SUCCESS]: (state, action) => {
    const tempState = {
      loading: false,
      customers: action.json
    };
    return Object.assign({}, state, tempState);
  },
  [CustomersActions.SET_LOADING]: (state, action) => {
    return Object.assign({}, state, { loading: action.state });
  }
};

export default function customersPage(state = INITIAL_STATE, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
