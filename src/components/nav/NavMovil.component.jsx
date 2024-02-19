import ClayButton from '@clayui/button';
import ClayLink from '@clayui/link';
import ClayNavigationBar from '@clayui/navigation-bar';
import React, {useState} from 'react';

const spritemap = '/images/icons/icons.svg';
const NavMovilComponent = () => {
  const [active, setActive] = useState('Item 1');
  return (
    <ClayNavigationBar triggerLabel={active} spritemap={spritemap}>
			<ClayNavigationBar.Item active={active === 'Item 1'}>
				<ClayLink
					href="#"
					onClick={(event) => {
						event.preventDefault();
						setActive('Item 1');
					}}
				>
					Item 1
				</ClayLink>
			</ClayNavigationBar.Item>
			<ClayNavigationBar.Item active={active === 'Item 2'}>
				<ClayButton
					onClick={() => setActive('Item 2')}
				>
					Item 2
				</ClayButton>
			</ClayNavigationBar.Item>
			<ClayNavigationBar.Item active={active === 'Item 3'}>
				<ClayLink
					href="#"
					onClick={(event) => {
						event.preventDefault();
						setActive('Item 3');
					}}
				>
					Item 3
				</ClayLink>
			</ClayNavigationBar.Item>
		</ClayNavigationBar>
  );
};

export default NavMovilComponent;
