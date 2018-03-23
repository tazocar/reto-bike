import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './TopMenu.css'

class TopMap extends Component {
  render() {
    return(
      <Router>
        <div className="row">
          <div className="col-12 noPadding">
            <ul className="menuListStyle d-flex justify-content-around">
              <NavLink to="/profile">
                <li>
                  <i class="fas fa-user-circle"></i>
                </li>
              </NavLink>
              <li>
                <i class="fas fa-bicycle"></i>
              </li>
              <li>
                <i class="fas fa-map-marker-alt"></i>
              </li>
              <li>
                <i class="fas fa-wrench"></i>
              </li>
            </ul>
          </div>
        </div>
      </Router>
    )
  }
}
export default TopMap; 