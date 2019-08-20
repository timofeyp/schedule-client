import React from 'react';
import PropTypes from 'prop-types';

const Participants = ({ VCParts }) => (
  <div>
    {VCParts.map(VCGroup =>
      VCGroup.VCParts.length ? (
        <h4 className="subhead mb-1">
          {`${VCGroup.groupName}: `}
          <span className="dark-text">
            {VCGroup.VCParts.map(VCPart => `${VCPart.name} / `)}
          </span>
        </h4>
      ) : null,
    )}
  </div>
);

Participants.propTypes = {
  VCParts: PropTypes.array,
};

export default Participants;
