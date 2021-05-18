/**
 * @format
 */

import 'react-native';
import React from 'react';
import {Entry} from '../src';

// Note: test renderer must be required after react-native.
// @ts-ignore
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Entry />);
});
