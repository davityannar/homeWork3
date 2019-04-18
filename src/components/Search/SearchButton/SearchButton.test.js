import React from 'react';
import SearchButton from './SearchButton';

describe('Tests SearchButton component', () => {
  it('Matching snapshot', () => {
    const component = shallow(<SearchButton />)

    expect(component).toMatchSnapshot();
  })
})