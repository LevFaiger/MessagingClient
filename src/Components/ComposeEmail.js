import React, { useContext} from 'react';
import {MessagingContext} from '../App'
import { Dropdown } from 'semantic-ui-react';
import _ from 'lodash';
const ComposeEmail = () => {

    const {state} = useContext(MessagingContext);
    const users = state.Users;
    debugger;
    const usersOptions = _.map(users, (user) => ({
        key: user.id,
        text: user.name,
        value: user.id,
      }))
      
    return (
        <Dropdown
       // onChange={(e,d)=>onChange(d.value)}
        placeholder='Choose user'
        fluid
        search
        selection
        options={usersOptions}
      />
    )

}

export default ComposeEmail;