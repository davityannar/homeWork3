import React from 'react'
import SearchInput from './SearchInput'

describe('Tests SearchInput component', () => {
  it('Matching snapshot', () => {
    const component = shallow(<SearchInput />)

    expect(component).toMatchSnapshot();
  })
})