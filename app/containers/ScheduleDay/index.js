import React from 'react';
import PropTypes from 'prop-types';
import { Table, Container, Card } from 'react-bootstrap';
import { CardBody, Col, Row } from 'reactstrap';
import { fetchEventRoutine } from 'containers/Schedule/constants';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { sortBy } from 'lodash';

const ScheduleDay = ({ eventData, toggleHandler, fetchEvent }) => {
  const { events } = eventData;
  const eventsSorted = sortBy(events, ['timeStart']);
  const eventClickHandler = id => {
    toggleHandler();
    fetchEvent(id);
  };

  return (
    <Container className="mb-10">
      <Row className="justify-content-md-center">
        <Col md={12} lg={12} xl={6}>
          <Card>
            <CardBody>
              <div className="card__title">
                <h3 className="subhead">{eventData._id}</h3>
              </div>
              <Table responsive hover striped>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Название</th>
                    <th />
                  </tr>
                </thead>
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
                <tbody>
                  {eventsSorted.map((event, i) => (
                    <tr
                      onClick={() => eventClickHandler(event._id)}
                      key={event._id}
                    >
                      <th className="no-wrap" scope="row">
                        {++i}
                      </th>
                      <td>{event.eventName}</td>
                      <td className="no-wrap" align="right">
                        {event.timeStart}-{event.timeEnd}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

ScheduleDay.propTypes = {
  eventData: PropTypes.object,
  toggleHandler: PropTypes.func,
  fetchEvent: PropTypes.func,
};

const mapDispatchToProps = {
  fetchEvent: id => fetchEventRoutine.trigger({ id }),
};

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
)(ScheduleDay);
