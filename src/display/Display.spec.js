// Test away!
import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Display from './Display';

describe('<Display />', () => {
   ///snapshot of component
   it('matches snapshot', () => {
      const tree = renderer.create(<Display />); // generates a DOM tree

      // snapshots are a JSON representation of the DOM tree
      expect(tree.toJSON()).toMatchSnapshot();
   });
});
