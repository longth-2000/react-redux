import React, { Component } from 'react'
import ModalScreen from './Modal'
import showModalAction from '../action/showModal'
import { connect } from 'react-redux'
import { Modal, Button } from 'antd';

class Screen extends Component {
    render() {
        return ( <
            div >
            <
            button onClick = { this.props.showModal } > show modals < /button> <
            Modal visible = { this.props.modal } >
            <
            ModalScreen / >
            <
            /Modal>

            <
            /div>
        )
    }
}
const mapStateToProps = state => {
    return {
        modal: state.modal
    }
}
const mapDispatchToProps = dispatch => {
    return {
        showModal: () => dispatch(showModalAction()),

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Screen)