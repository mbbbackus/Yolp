import React, { Component } from "react";
import axios from "axios";
import {
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {}
    };
  }
  componentDidMount() {
    console.log("http://localhost:8000/api/restaurants/" + this.props.match.params.restaurantId);
    this.loadRestaurant();
  }

  loadRestaurant = () => {
    let rid = this.props.match.params.restaurantId;
    axios
      .get("http://localhost:8000/api/restaurants/" + rid)
      .then(res => this.setState({ restaurant: res.data }))
      .catch(err => console.log(err));
  };

  handleChange = e => {
    let { name, value } = e.target;
    const restaurant = { ...this.state.restaurant, [name]: value };
    this.setState({ restaurant });
  };

  render () {
    return (
      <div className="restaurant-body row">
        <div className="restauran-info p-5">
          <h2 className="restaurant-name">{this.state.restaurant.name}</h2>
          <p>Food Type: {this.state.restaurant.foodtype}</p>
          <p>Address: {this.state.restaurant.street_address}</p>
          <p>City: {this.state.restaurant.city}</p>
          <p>State: {this.state.restaurant.state}</p>
          <p>Zip Code: {this.state.restaurant.zip_code}</p>
          <p>Contact: {this.state.restaurant.email} {this.state.restaurant.phone}</p>
        </div>
        <img className="restaurant-profile-photo" src={this.state.restaurant.photo} />
        <Form className="ml-2">
          <FormGroup>
            <Label for="exampleSelect">Rating</Label>
            <Input
              type="select" 
              name="select" 
              id="exampleSelect" 
              value={this.state.restaurant.rating}
              onChange={this.handleChange}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Restaurant;