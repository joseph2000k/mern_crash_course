import React, {Component} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import {v4 as uuid} from 'uuid';

import {connect} from 'react-redux';
import {addItem} from '../actions/itemActions';

class ItemModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e)=> {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit =  e => {
        e.preventDefault();


        const newItem = {
            id: uuid(),
            name: this.state.name
        }

    //Add item via addItem action
    this.props.addItem(newItem);

    //close Modal
    this.toggle();
    }

    render(){
        return(
            <div>
                <Button
                color= 'dark'
                style= {{marginBottom: '2rem'}}
                onClick={this.toggle}
                >
                    Add Item
                </Button>

                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>
                    Add To Shopping List
                    </ModalHeader>

                    <ModalBody>
                        <form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">
                                    Item
                                </Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Add Shopping Item"
                                    onChange={this.onChange}
                                >
                                </Input>
                                <Button color='dark' style={{marginTop: '2rem'}} block>
                                    Add Item
                                </Button>
                            </FormGroup> 

                        </form>
                    </ModalBody>
                </Modal>
            </div>

        );
    }
}

//Map Item state to props
const MapStateToProps = state => ({
    item: state.item
})


export default connect(MapStateToProps, {addItem})(ItemModal);