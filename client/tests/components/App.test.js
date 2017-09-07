import React from 'react';
import { shallow } from 'enzyme';
import App from '../../js/components/App';
import Party from '../../js/components/Party';

describe('App Component', function () {
  let app;

  beforeEach(() => {
    app = shallow(<App>{<Party/>}</App>);
  });

  test('App component should render with app class', () => {
    expect(app).toHaveClassName('app');
  });

  test('should render children components', () => {
    expect(app.contains(<Party/>)).toBe(true);
  });

  test('should match snapshot', () => {
    expect(app).toMatchSnapshot();
  });
});