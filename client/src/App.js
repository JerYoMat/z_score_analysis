import React, { Component } from 'react';
import SelectedCompanies from './SelectedCompanies';
import CompanySearch from './CompanySearch';

class App extends Component {
  state = {
    selectedCompanies: [],
  }

  removeCompanyItem = (itemIndex) => {
    const filteredCompanies = this.state.selectedCompanies.filter(
      (item, idx) => itemIndex !== idx,
    );
    this.setState({ selectedCompanies: filteredCompanies });
  }

  addCompany = (company) => {
    const newCompanies = this.state.selectedCompanies.concat(company);
    this.setState({ selectedCompanies: newCompanies });
  }

  render() {
    const { selectedCompanies } = this.state;

    return (
      <div className='App'>
        <div>
          <SelectedCompanies
            companies={selectedCompanies}
            onCompanyClick={this.removeCompanyItem}
          />
          <CompanySearch
            onCompanyClick={this.addCompany}
          />
        </div>
      </div>
    );
  }
}

export default App;