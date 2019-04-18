import React from 'react';
import Types from './Types';

describe('Tests Types component', () => {
  it('Matching snapshot', () => {
   
    const component = shallow(<Types />)

    expect(component).toMatchSnapshot();
  })
})