import React from 'react';
import PropTypes from 'prop-types';
import { TabPane } from 'reactstrap';

const Participants = ({ vcParts }) => (
  <div>
    {vcParts.map(vcGroup => (
      <h4 className="subhead mb-1">
        {`${vcGroup.group_name}: `}
        <span className="dark-text">
          {vcGroup.vc_parts.map(vcPart => `${vcPart.name} / `)}
        </span>
      </h4>
    ))}
  </div>
);

Participants.propTypes = {
  vcParts: PropTypes.array,
};

export default Participants;
