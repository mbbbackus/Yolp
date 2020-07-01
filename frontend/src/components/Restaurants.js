import React, { Component } from "react";
import Modal from "./Modal";
import axios from "axios";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: {
        name: "",
        food_type: "",
        address: "",
        city: "",
        state: "",
        zip_code: "",
        email: "",
        phone: "",
        rating: -1,
        photo: "",
      },
      restaurantList: [],
      newRestaurant: false,
    };
  }
  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("http://localhost:8000/api/restaurants/")
      .then(res => this.setState({ restaurantList: res.data }))
      .catch(err => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  handleSubmit = item => {
    this.toggle();
    if (item.id) {
      axios
        .put(`http://localhost:8000/api/restaurants/${item.id}/`, item)
        .then(res => this.refreshList());
      return;
    }
    axios
      .post("http://localhost:8000/api/restaurants/", item)
      .then(res => this.refreshList());
  };
  handleDelete = item => {
    axios
      .delete(`http://localhost:8000/api/restaurants/${item.id}`)
      .then(res => this.refreshList());
  };
  createItem = () => {
    const item = {
      name: "",
      food_type: "",
      address: "",
      city: "",
      state: "",
      zip_code: "",
      email: "",
      phone: "",
      rating: -1,
      photo: "",
    };
    this.setState({ activeItem: item, modal: !this.state.modal, newRestaurant: true });
  };
  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal, newRestaurant: false });
  };

  renderItems = () => {
    const newItems = this.state.restaurantList; // restaurantList.filter(item => item.completed === viewCompleted);
    return newItems.map(item => (
      <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
        <span className="mr-2">
          <Link class="text-dark" to={`/restaurant/${item.id}`}>{item.name}</Link>
        </span>
        <span className="mr-2">
          {item.foodtype}
        </span>
        <img className="mr-2 restaurant-img" src={item.photo} />
        <span>
          <button onClick={() => this.editItem(item)} className="btn btn-secondary mr-2">
            {" "}
            Edit{" "}
          </button>
          <button onClick={() => this.handleDelete(item)} className="btn btn-danger">
            Delete{" "}
          </button>
        </span>
      </li>
    ));
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-10 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <ul className="list-group list-group-flush">
                <li key="0" className="list-group-item d-flex justify-content-between">
                  <span className="text-dark">Restaurant Name</span>
                  <span className="mr-5 text-dark">Food Type</span>
                  <span id="restaurantImg"></span>
                  <span>
                    <button onClick={this.createItem} className="btn btn-primary text-secondary mb-1 bg-light border-white">
                      Add restaurant
                    </button>
                  </span>
                </li>
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            newRestaurant={this.state.newRestaurant}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </div>
    );
  }
}

export default Restaurants;