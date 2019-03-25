import React from 'react';
import { connect } from 'react-redux';
import { selectForCompare, reset } from './index';
import responseBlob from './response.json'

const StepCounter = ({
  companies, 
  selectForCompare

}) => (
  <main>
    {companies.map(company => (
      <div
        key={company.id}
        onClick={() => selectForCompare(company)}
      >
        <div>{company.companyname}</div>
      </div>
    ))}
  </main>
);

function mapStateToProps(state) {
  return {
    companyA: state.companyA,
    companyB: state.companyB,
    companies: Object.values(state.companies)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  selectForCompare: () => dispatch(selectForCompare(ownProps)),
  reset: () => dispatch(reset(ownProps))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepCounter);


/**
 <div className='card'>
        <div className='step-counter'>
          <button className='btn btn-primary' onClick={this.increment}>Add Step</button>
          <button className='btn btn-danger' onClick={this.reset}>Reset</button>
          <p>Your total number of steps is: {this.props.count} </p>
        </div>
      </div>
 */