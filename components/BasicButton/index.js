import React from 'react';
import {Button} from 'react-native-elements';

const BasicButton = ({width, color = '#C39BD3', ...props}) => (
  <Button {...props} buttonStyle={{width, backgroundColor: color}} />
);

export default BasicButton;