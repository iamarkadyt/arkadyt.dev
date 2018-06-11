import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Pager from './Pager';

configure({ adapter: new Adapter() });

it('matches snapshot.', () => {
    const tree = shallow(<Pager />);
    expect(tree).toMatchSnapshot();
});