import React from 'react'
import SortBy from './SortBy'

describe('Tests SortBy component', () => {
  it('Matching snapshot', () => {
    const component = shallow(<SortBy />)

    expect(component).toMatchSnapshot();
  })
})