/*
 * FeaturePage
 *
 * List all the features
 */
import { accessibility } from 'accessible-react-table';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import { Helmet } from 'react-helmet';
import './style.scss';
import 'react-table/react-table.css';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {
  getCustomers
} from '../../store/customers/customersActions';

const AccessibleReactTable = accessibility(ReactTable);

export class CustomersPage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function


  componentDidMount() {
    this.props.getCustomers();
  }


  render() {

    const columns = [
      {
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
      },
      {
        Header: 'Email',
        accessor: 'email' // String-based value accessors!
      },
      {
        Header: 'id',
        accessor: 'id',
        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
      }
    ];

    return (
      <div className="customers">
        <Helmet>
          <title>Customers Page</title>
          <meta
            name="description"
            content="FTeston"
          />
        </Helmet>
        <h1>Tests</h1>
        <AccessibleReactTable
          data={this.props.customers}
          columns={columns}
        />
      </div>
    );
  }

}

CustomersPage.propTypes = {
  getCustomers: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    customers: state.customers.customers
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCustomers: bindActionCreators(getCustomers, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CustomersPage));
