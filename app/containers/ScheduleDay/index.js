import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Table, Container, Card } from 'react-bootstrap';
import { CardBody, Col, Row } from 'reactstrap';
import { fetchEventRoutine } from 'containers/Schedule/constants';
import { compose } from 'redux';
import { connect } from 'react-redux';

const ScheduleDay = ({ eventData, toggleHandler, fetchEvent }) => {
  const { data } = eventData;
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
                <h3 className="subhead">{eventData._id.date}</h3>
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
                  {data.map((event, i) => (
                    <tr
                      onClick={() => eventClickHandler(event.event_id)}
                      key={event.event_id}
                    >
                      <th className="no-wrap" scope="row">
                        {++i}
                      </th>
                      <td>{event.event_name}</td>
                      <td className="no-wrap" align="right">{`${
                        event.hour_start ? event.hour_start : '00'
                      }.${event.minute_start ? event.minute_start : '00'}-${
                        event.hour_end ? event.hour_end : '00'
                      }.${event.minute_end ? event.minute_end : '00'}`}</td>
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
