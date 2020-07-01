import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  FormText,
  Input,
  Label
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
      newRestaurant: this.props.newRestaurant,
    };
  }
  handleChange = e => {
    let { name, value } = e.target;
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
  };
  render() {
    const { toggle, onSave } = this.props;
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}> {this.state.newRestaurant ? "Create" : "Edit"} Restaurant </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.activeItem.name}
                onChange={this.handleChange}
                placeholder="Enter restaurant name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="foodtype">Food Type</Label>
              <Input
                type="text"
                name="foodtype"
                value={this.state.activeItem.foodtype}
                onChange={this.handleChange}
                placeholder="Enter food type"
              />
            </FormGroup>
            <FormGroup>
              <Label for="street_address">Street Address</Label>
              <Input
                type="text"
                name="street_address"
                value={this.state.activeItem.street_address}
                onChange={this.handleChange}
                placeholder="Enter street address"
              />
            </FormGroup>
            <FormGroup>
              <Label for="city">City</Label>
              <Input
                type="text"
                name="city"
                value={this.state.activeItem.city}
                onChange={this.handleChange}
                placeholder="Enter city"
              />
            </FormGroup>
            <FormGroup>
              <Label for="state">State</Label>
              <Input
                type="text"
                name="state"
                value={this.state.activeItem.state}
                onChange={this.handleChange}
                placeholder="Enter state"
              />
            </FormGroup>
            <FormGroup>
              <Label for="zip_code">Zip Code</Label>
              <Input
                type="text"
                name="zip_code"
                value={this.state.activeItem.zip_code}
                onChange={this.handleChange}
                placeholder="Enter zip code"
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="text"
                name="email"
                value={this.state.activeItem.email}
                onChange={this.handleChange}
                placeholder="Enter email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone Number</Label>
              <Input
                type="text"
                name="phone"
                value={this.state.activeItem.phone}
                onChange={this.handleChange}
                placeholder="Enter phone number"
              />
            </FormGroup>
            
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => onSave(this.state.activeItem)}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}