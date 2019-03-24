import React from 'react';
import Client from './Client';

const MATCHING_ITEM_LIMIT = 25;

class Companiesearch extends React.Component {
  state = {
    companies: [],
    showRemoveIcon: false,
    searchValue: '',
  };

  handleSearchChange = (e) => {
    const value = e.target.value;

    this.setState({
      searchValue: value,
    });

    if (value === '') {
      this.setState({
        companies: [],
        showRemoveIcon: false,
      });
    } else {
      this.setState({
        showRemoveIcon: true,
      });

      Client.search(value, (companies) => {
        this.setState({
          companies: companies.slice(0, MATCHING_ITEM_LIMIT),
        });
      });
    }
  };

  handleSearchCancel = () => {
    this.setState({
      companies: [],
      showRemoveIcon: false,
      searchValue: '',
    });
  };

  render() {
    const { showRemoveIcon, companies } = this.state;
    const removeIconStyle = showRemoveIcon ? {} : { visibility: 'hidden' };

    const companyRows = companies.map((company, idx) => (
      <tr
        key={idx}
        onClick={() => this.props.onCompanyClick(company)}
      >
        <td>{company.companyname}</td>
      </tr>
    ));

    return (
      <div id='company-search'>
        <table>
          <thead>
            <tr>
              <th>
                <div>
                  <div>
                    <input
                      className='prompt'
                      type='text'
                      placeholder='Search companies...'
                      value={this.state.searchValue}
                      onChange={this.handleSearchChange}
                    />
                    <i className='search icon' />
                  </div>
                  <i
                    className='remove icon'
                    onClick={this.handleSearchCancel}
                    style={removeIconStyle}
                  />
                </div>
              </th>
            </tr>
            <tr>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {companyRows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Companiesearch;