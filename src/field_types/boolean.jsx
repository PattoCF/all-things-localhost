
import React from 'react';
import { Paragraph } from '@contentful/f36-components';
//import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';

const Boolean = () => {
  //const sdk = useSDK();
  /*
     To use the cma, inject it as follows.
     If it is not needed, you can remove the next line.
  */
  // const cma = useCMA();
  // If you only want to extend Contentful's default editing experience
  // reuse Contentful's editor components
  // -> https://www.contentful.com/developers/docs/extensibility/field-editors/

  return <Paragraph>Boolean </Paragraph>;
};

export default Boolean;
