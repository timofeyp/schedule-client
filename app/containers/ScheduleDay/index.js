import React from 'react';
import PropTypes from 'prop-types';
import { Table, Container, Card } from 'react-bootstrap';

const ScheduleDay = ({ eventData }) => {
  const { data } = eventData;
  return (
    <Container>
      <Card>
        <Table responsive hover>
          <thead>
            <tr>
              <th>#</th>
              <th>{eventData._id.date}</th>
              <th />
              <th />
              <th />
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {data.map((event, i) => (
              <tr key={event.event_id}>
                <td>{++i}</td>
                <td>{event.event_name}</td>
                <td>{`${event.hour_start ? event.hour_start : '00'}.${
                  event.minute_start ? event.minute_start : '00'
                }-${event.hour_end ? event.hour_end : '00'}.${
                  event.minute_end ? event.minute_end : '00'
                }`}</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
};

ScheduleDay.propTypes = {
  eventData: PropTypes.object,
};

export default ScheduleDay;
