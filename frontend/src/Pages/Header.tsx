import React from 'react';
import * as CSS from 'csstype';

export const Header: React.FC = () => {
  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <span style={bigLStyle}>Y</span>ouTube <span style={bigLStyle}>C</span>
        omment <span style={bigLStyle}>A</span>nalyser
      </div>
    </div>
  );
};

const bigLStyle: CSS.Properties = {
  fontSize: '3rem',
  color: 'red',
  marginRight: '-1px',
};

// HeaderStyle not TS compatible?
const headerStyle: CSS.Properties = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  textAlign: 'center',
  color: 'lightgray',
  backgroundColor: 'black',
  paddingBottom: '12px',
};

const containerStyle: CSS.Properties = {
  paddingTop: '225px',
  paddingBottom: '8px',
  fontSize: '2rem',
  display: 'inline',
  textAlign: 'left',
};
