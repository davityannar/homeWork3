import React from 'react';
import MoviesFound from './MoviesFound';

describe('Tests MoviesFound component', () => {
  it('Matching snapshot', () => {
    const component = shallow(<MoviesFound />)

    expect(component).toMatchSnapshot();
  })
})