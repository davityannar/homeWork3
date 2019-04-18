import React from 'react'
import FindYourMovie from './FindeYourMovie'

describe('Tests FindYourMovie component', () => {
  it('Matching snapshot', () => {
    const component = shallow(<FindYourMovie />);

    expect(component).toMatchSnapshot();
  })
})