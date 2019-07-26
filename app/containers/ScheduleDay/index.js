import React from 'react';
import { Table, Container, Card } from 'react-bootstrap';

const ScheduleDay = ({ name, num, eventData }) => {
  const { event, data } = eventData;
  return (
    <tr>
      <td>{num}</td>
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
  );
};

export default ScheduleDay;
