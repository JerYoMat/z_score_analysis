
import React from 'react';

export default function SelectedCompanies(props) {
  const { companies } = props;

  const companyRows = companies.map((company, idx) => (
    <tr
      key={idx}
      onClick={() => props.onCompanyClick(idx)}
    >
      <td>{company.companyname}</td>
     
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th colSpan='5'>
            <h3>Selected companies</h3>
          </th>
        </tr>
        <tr>
          <th >Description</th>
        
        </tr>
      </thead>
      <tbody>
        {companyRows}
      </tbody>
    </table>
  );
}

