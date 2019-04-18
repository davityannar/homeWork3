import React from 'react';
import SearchTypes from './SearchTypes';

describe('Tests SearchTypes component', () => {
  it('Matching snapshot', () => {
    const component = shallow(<SearchTypes />)

    expect(component).toMatchSnapshot();
  })
})