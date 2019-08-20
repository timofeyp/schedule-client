import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { makeSelectSelectedVCParts } from 'containers/Schedule/selector';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

const mapStateToProps = createStructuredSelector({
  currentWeekVCParts: makeSelectSelectedVCParts(),
});

const Filter = ({ currentWeekVCParts }) => {
  const currentWeekVCPartsArray = currentWeekVCParts
    ? currentWeekVCParts.reduce((sum, part) => sum.concat(part.vc_parts), [])
    : [];

  return <Select options={currentWeekVCPartsArray} />;
};

Filter.propTypes = {
  currentWeekVCParts: PropTypes.array,
};

export default connect(
  mapStateToProps,
  null,
)(Filter);
