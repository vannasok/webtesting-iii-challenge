// Test away
import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';
import 'jest-dom/extend-expect';

describe('<Dashboard />', () => {
   it('matches snapshot', () => {
      const tree = renderer.create(<Dashboard />);

      expect(tree.toJSON()).toMatchSnapshot();
   });

   it('render controls & display', () => {
      const { getByText } = render(<Dashboard />);
      getByText(/unlocked/i);
      getByText(/lock gate/i);
      getByText(/open/i);
      getByText(/close gate/i);
   });
});
