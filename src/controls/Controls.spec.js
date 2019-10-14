import React from 'react';
import Controls from './Controls';
import renderer from 'react-test-renderer';
import 'jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

describe('<Controls />', () => {
   it('matches snapshot', () => {
      const tree = renderer.create(<Controls />);

      expect(tree.toJSON()).toMatchSnapshot();
   });

   //provide buttons to toggle the closed and locked states
   it('render buttons: close/lock', () => {
      const { getByText } = render(<Controls />);
      getByText(/close gate/i);
      getByText(/lock gate/i);
   });

   //buttons' text changes to reflect the state the door will be in if clicked
   it('toggle Closed change when click', () => {
      const toggleClosed = jest.fn();
      const { getByText } = render(<Controls toggleClosed={toggleClosed} />);
      const btn = getByText(/close gate/i);
      fireEvent.click(btn);
      expect(toggleClosed).toBeCalledTimes(1);
   });

   //the closed toggle button is disabled if the gate is locked
   it('disable open/close  when locked', () => {
      const { getByText } = render(<Controls locked={true} />);
      const btn = getByText(/close gate/i);
      expect(btn).toBeDisabled();
   });

   //the locked toggle button is disabled if the gate is open
   it(' should disable lock/unlock when open', () => {
      const { getByText } = render(<Controls closed={false} />);
      const btn = getByText(/lock gate/i);
      expect(btn).toBeDisabled();
   });
});
