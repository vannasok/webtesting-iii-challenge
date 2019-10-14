// Test away!
import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Display from './Display';

describe('<Display />', () => {
   //snapshot
   it('matches snapshot', () => {
      const tree = renderer.create(<Display />);

      expect(tree.toJSON()).toMatchSnapshot();
   });

   //locked when locked
   it('display locked while locked', () => {
      const component = render(<Display closed={true} locked={true} />);
      component.getByText('Locked');
   });

   //unlocked when unlocked
   it('display unlocked while unlocked', () => {
      const component = render(<Display closed={true} locked={false} />);
      component.getByText('Unlocked');
   });

   //red-led when closed
   it('display red-led when closed', () => {
      const component = render(<Display closed={true} locked={false} />);
      const displayclosed = component.getByText('Closed');
      expect(displayclosed).toHaveClass('red-led');
   });

   //green-led when open
   it('display green-led while open', () => {
      const component = render(<Display closed={false} locked={false} />);
      const displayopen = component.getByText('Open');
      expect(displayopen).toHaveClass('green-led');
   });
});
