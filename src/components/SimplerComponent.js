// Code SimplerComponent Here
//In the components/SimplerComponent.js file, create a SimplerComponent component.

import React from 'react';

//The component should be a "stateless functional" component.

const SimplerComponent = props => {
  return <div onClick={props.handleClick}>I am just happy</div>
}

export default SimplerComponent