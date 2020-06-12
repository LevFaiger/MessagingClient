import React from 'react'
import { Tab } from 'semantic-ui-react';
import ComposeEmail from './ComposeEmail'

const panes = [
  {
    menuItem: 'Compose Email',
    render: () => <Tab.Pane attached={false}><ComposeEmail></ComposeEmail></Tab.Pane>,
  },
  {
    menuItem: 'Mange Emails',
    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
  }
]

const Menu = () => <Tab menu={{ pointing: true }} panes={panes} />

export default Menu