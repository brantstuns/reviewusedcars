import React from 'react';
import { shallow } from 'enzyme';
import Party from '../../js/components/Party';

describe('Party Component', function () {
  let party;

  beforeEach(() => {
    party = shallow(<Party/>);
  });

  test('Party component should contain an img', () => {
    expect(party.find('img').length).toBe(1);
  });

  test('should match snapshot', () => {
    expect(party).toMatchSnapshot();
  });
});