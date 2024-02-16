import {ClayButtonWithIcon, ClayButton} from '@clayui/button';
import {ClayInput} from '@clayui/form';
import ClayIcon from '@clayui/icon';
import ClayManagementToolbar from '@clayui/management-toolbar';


const  spritemap = '/images/icons/icons.svg';

const ToolBarControl = ({children}) => {
    return (
      <ClayManagementToolbar>
        <ClayManagementToolbar.ItemList>
          <ClayManagementToolbar.Item>
            {children}
          </ClayManagementToolbar.Item>
        </ClayManagementToolbar.ItemList>
      </ClayManagementToolbar>
    );
  };
  
export default ToolBarControl;