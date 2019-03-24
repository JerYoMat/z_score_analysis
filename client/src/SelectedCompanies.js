
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
    
    <div> Here!
        {companyRows}
        </div>
    
  );
}

