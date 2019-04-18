import React from 'react';
import Netflix from './Netflix';

describe('Tests Netflix component', () => {
  it('Matching snapshot', () => {
    const component = shallow(<Netflix />);

    expect(component).toMatchSnapshot();
  })
})