import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router';
import Router from '../js/Router';
import Party from '../js/components/Party';

describe('Router component', function () {
  let router;
  let pathMap;

  beforeEach(() => {
    router = shallow(<Router/>);
    pathMap = router.find(Route).reduce((path, route) => {
      const routeProps = route.props();
      path[routeProps.path] = routeProps.component;
      return path;
    }, {});
  });

  test('/ route should render Party component', () => {
    expect(pathMap['/']).toBe(Party);
  });
});