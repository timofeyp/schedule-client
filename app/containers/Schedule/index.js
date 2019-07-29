import React, { useEffect } from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import ScheduleDay from 'containers/ScheduleDay';
import { connect } from 'react-redux';
import { fetchCurrentWeekEventsRoutine } from 'containers/Schedule/constants';
import { createStructuredSelector } from 'reselect';
import { makeSelectCurrentWeekEvents } from 'containers/Schedule/selector';
import { isEmpty } from 'lodash';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from 'containers/Schedule/reducer';
import { useInjectReducer } from 'utils/injectReducer';
import saga from 'containers/Schedule/saga';

const Schedule = ({ fetchCurrentWeekEvents, currentWeekEvents }) => {
  useInjectReducer({ key: 'schedule', reducer });
  useInjectSaga({ key: 'schedule', saga });
  useEffect(() => {
    fetchCurrentWeekEvents();
  }, []);
  if (!isEmpty(currentWeekEvents)) {
    return (
      <div>
        {currentWeekEvents.map((event, i) => (
          <ScheduleDay key={i} eventData={event} />
        ))}
      </div>
    );
  }
  return <div>LOAD</div>;
};

Schedule.propTypes = {
  fetchCurrentWeekEvents: PropTypes.func,
  currentWeekEvents: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  currentWeekEvents: makeSelectCurrentWeekEvents(),
});

const mapDispatchToProps = {
  fetchCurrentWeekEvents: () => fetchCurrentWeekEventsRoutine.trigger(),
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Schedule);
