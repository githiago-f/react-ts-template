import React from 'react';
import Card from 'styles/Card';
import { shallow } from 'enzyme';

test('Render Card component without crashing', () => {
	shallow(<Card title="Card's title" />);
});

test('Contains a title', () => {
	const title = <h3>Card&apos;s title</h3>;
	const card = shallow(<Card title="Card's title" />);
	expect(card.contains(title)).toBe(true);
});
