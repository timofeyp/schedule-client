import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ScheduleDay from 'containers/ScheduleDay';
import { connect } from 'react-redux';
import {
  fetchCurrentWeekEventsRoutine,
  fetchVCPartsRoutine,
  fetchSelectedVCPartsRoutine,
} from 'containers/Schedule/constants';
import { createStructuredSelector } from 'reselect';
import { makeSelectCurrentWeekEvents } from 'containers/Schedule/selector';
import { isEmpty } from 'lodash';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from 'containers/Schedule/reducer';
import { useInjectReducer } from 'utils/injectReducer';
import saga from 'containers/Schedule/saga';
import Modal from 'containers/EventInfoModal';

const Schedule = ({
  fetchCurrentWeekEvents,
  currentWeekEvents,
  fetchVCParts,
  fetchSelectedVCParts,
}) => {
  useInjectReducer({ key: 'schedule', reducer });
  useInjectSaga({ key: 'schedule', saga });
  useEffect(() => {
    fetchCurrentWeekEvents();
    fetchVCParts();
    fetchSelectedVCParts();
  }, []);
  const [isOpen, toggleOpen] = useState(false);
  const toggleHandler = () => toggleOpen(!isOpen);
  if (!isEmpty(currentWeekEvents)) {
    return (
      <div className="container__wrap">
        {currentWeekEvents.map((event, i) => (
          <ScheduleDay
            key={i}
            eventData={event}
            toggleHandler={toggleHandler}
          />
        ))}
        <Modal
          color="primary"
          title="Congratulations!"
          header
          btn="Default"
          message="Expect warmly its tended garden him esteem had remove off. Effects dearest staying
                   now sixteen nor improve."
          isOpen={isOpen}
          toggleHandler={toggleHandler}
        />
      </div>
    );
  }
  return <div>LOAD</div>;
};

Schedule.propTypes = {
  fetchCurrentWeekEvents: PropTypes.func,
  currentWeekEvents: PropTypes.array,
  fetchVCParts: PropTypes.func,
  fetchSelectedVCParts: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  currentWeekEvents: makeSelectCurrentWeekEvents(),
});

const mapDispatchToProps = {
  fetchCurrentWeekEvents: () => fetchCurrentWeekEventsRoutine.trigger(),
  fetchVCParts: () => fetchVCPartsRoutine.trigger(),
  fetchSelectedVCParts: () => fetchSelectedVCPartsRoutine.trigger(),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Schedule);
