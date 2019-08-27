import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { makeSelectSelectedVCParts } from 'containers/Schedule/selectors';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { fetchCurrentWeekEventsRoutine } from 'containers/Schedule/constants';

const Filter = ({ currentWeekVCParts, fetchEvents }) => {
  const currentWeekVCPartsArray = currentWeekVCParts
    ? currentWeekVCParts.reduce((sum, part) => sum.concat(part.vc_parts), [])
    : [];

  const handleSelect = values => {
    const items = values ? values.map(item => item.value) : [];
    fetchEvents(items);
    localStorage.setItem('selectValues', JSON.stringify(values));
  };

  const defaultValues = localStorage.getItem('selectValues')
    ? JSON.parse(localStorage.getItem('selectValues'))
    : [];

  return (
    <Select
      defaultValue={defaultValues}
      onChange={handleSelect}
      isMulti
      options={currentWeekVCPartsArray}
    />
  );
};

Filter.propTypes = {
  currentWeekVCParts: PropTypes.array,
  fetchEvents: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  currentWeekVCParts: makeSelectSelectedVCParts(),
});

const mapDispatchToProps = {
  fetchEvents: events => fetchCurrentWeekEventsRoutine.trigger(events),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter);
