import React from 'react'
import { Menu} from 'semantic-ui-react'
import { withRouter } from 'react-router'

class Navbar extends React.Component {

    newBtn = () => {
        this.props.history.push('/note/new')
    }

    outBtn = () => {
        this.props.history.push('')
    }

    render(){
        return<div className='navbar'>
            <Menu>
                <Menu.Item onClick={this.newBtn}> New Note </Menu.Item>
                <Menu.Item onClick={this.outBtn}> Sign out </Menu.Item>
            </Menu>
            </div>
    }
}

export default withRouter(Navbar)