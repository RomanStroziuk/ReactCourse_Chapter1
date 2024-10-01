import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

const LoaderWithDimmer = ({ isLoading, children }) => (
  <Segment>
    <Dimmer active={isLoading} inverted>
      <Loader />
    </Dimmer>
    {children}
  </Segment>
);

export default LoaderWithDimmer;
