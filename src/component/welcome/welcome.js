import React from 'react'
import { Transition, Button, Divider } from 'semantic-ui-react'
import { Modal, ModalFooter, ModalBody, ModalHeader } from 'reactstrap'

import './welcome.css'


class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: true
        }
    }

    componentDidMount() {

    }
    toggleVisibility() {
        this.setState({ visible: !this.state.visible })
    }
    render() {
        const { visible } = this.state

        return (
            <div className="">
                <Button content={visible ? 'Hide' : 'Show'} onClick={this.toggleVisibility} />
                <Divider hidden />
                <Transition visible={visible} animation='scale' duration={500}>
                    <Image size='small' src='/images/leaves/1.png' />
                </Transition>


            </div>
        )
    }
}
export default Welcome