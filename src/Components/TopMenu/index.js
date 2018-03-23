import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Application from './../Map/index';
import ReportBike from './../ReportBike/index';
import './TopMenu.css';

class TopMap extends Component {
  render() {
    return(
      <Router>
        <div><Route path="/" exact strict render={
            () => {
              return(
                <div>
                  <div className="row">
                    <div className="col-12 noPadding">
                      <ul className="menuListStyle d-flex justify-content-around">
                        <NavLink to="/bikes">
                          <li>
                            <i className="fas fa-bicycle"></i>
                          </li>
                        </NavLink>
                        <NavLink to="/parking">
                          <li>
                            <i className="fas fa-map-marker-alt"></i>
                          </li>
                        </NavLink>
                        <NavLink to="/report">
                          <li>
                            <i className="fas fa-wrench"></i>
                          </li>
                        </NavLink>
                      </ul>
                    </div>
                  </div>
                  <Application/>
                </div>
              )
            }
          } />
          <Route path="/profile" exact strict render={
            () => {
              return(
                <div>
                  <div className="row">
                    <div className="col-12 noPadding">
                      <ul className="menuListStyle text-left-arrow">
                        <NavLink to="/bikes">
                          <li>
                            <i className="fas fa-arrow-left"></i>
                          </li>
                        </NavLink>
                      </ul>
                    </div>
                  </div>
                  <div className="relleno"> Aca va el div del perfil c:</div>
                </div>
              )
            }
          } />
          <Route path="/bikes" exact strict render={
            () => {
              return(
                <div>
                  <div className="row">
                    <div className="col-12 noPadding">
                      <ul className="menuListStyle d-flex justify-content-around">
                        <NavLink to="/profile">
                          <li>
                            <i className="fas fa-user-circle"></i>
                          </li>
                        </NavLink>
                        <NavLink to="/bikes">
                          <li>
                            <i className="fas fa-bicycle"></i>
                          </li>
                        </NavLink>
                        <NavLink to="/parking">
                          <li>
                            <i className="fas fa-map-marker-alt"></i>
                          </li>
                        </NavLink>
                        <NavLink to="/report">
                          <li>
                            <i className="fas fa-wrench"></i>
                          </li>
                        </NavLink>
                      </ul>
                    </div>
                  </div>
                  <Application/>
                </div>
              )
            }
          } />
          <Route path="/parking" exact strict render={
            () => {
              return(
                <div>
                  <div className="row">
                    <div className="col-12 noPadding">
                      <ul className="menuListStyle d-flex justify-content-around">
                        <NavLink to="/profile">
                          <li>
                            <i className="fas fa-user-circle"></i>
                          </li>
                        </NavLink>
                        <NavLink to="/bikes">
                          <li>
                            <i className="fas fa-bicycle"></i>
                          </li>
                        </NavLink>
                        <NavLink to="/parking">
                          <li>
                            <i className="fas fa-map-marker-alt"></i>
                          </li>
                        </NavLink>
                        <NavLink to="/report">
                          <li>
                            <i className="fas fa-wrench"></i>
                          </li>
                        </NavLink>
                      </ul>
                    </div>
                  </div>
                  <Application/>
                </div>
              )
            }
          } />
          <Route path="/report" exact strict render={
            () => {
              return(
                <div>
                  <div className="row">
                    <div className="col-12 noPadding">
                      <ul className="menuListStyle d-flex justify-content-around">
                        <NavLink to="/profile">
                          <li>
                            <i className="fas fa-user-circle"></i>
                          </li>
                        </NavLink>
                        <NavLink to="/bikes">
                          <li>
                            <i className="fas fa-bicycle"></i>
                          </li>
                        </NavLink>
                        <NavLink to="/parking">
                          <li>
                            <i className="fas fa-map-marker-alt"></i>
                          </li>
                        </NavLink>
                        <NavLink to="/report">
                          <li>
                            <i className="fas fa-wrench"></i>
                          </li>
                        </NavLink>
                      </ul>
                    </div>
                  </div>
                  <ReportBike />
                </div>
              )
            }
          } /></div>
      </Router>
    )
  }
}
export default TopMap; 