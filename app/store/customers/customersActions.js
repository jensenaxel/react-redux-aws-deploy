import routes from '../../constants/routes';
import axios from 'axios';

export const CustomersActions = {
  GET_ALL_CUSTOMERS_SUCCESS: 'GET_ALL_CUSTOMERS_SUCCESS',
  GET_ALL_CUSTOMERS_FAIL: 'GET_ALL_CUSTOMERS_FAIL',
  GET_ALL_CUSTOMERS: 'GET_ALL_CUSTOMERS',
  SET_LOADING: 'SET_AUDIT_EVENTS_LOADING'
};

export function getCustomers() {
  return (dispatch, getState) => {
    const route = routes.GET_ALL_CUSTOMERS;
    dispatch({ type: CustomersActions.SET_LOADING, state: true });
    return axios.get(route, { noCache: true }).then(response => {
      dispatch({ json: response.data, type: CustomersActions.GET_ALL_CUSTOMERS_SUCCESS });
    });
  };
}

