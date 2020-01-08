import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
// import '../App.css'

export default class SearchBar extends Component {

  render() {

    return (
     <div className="input-group">
      <input className="change-input-style" type="text" className="form-control"size="massive" onChange={event => this.props.handleSearch(event)} style={{width: '45%'}} size='large' icon='search' placeholder='Search...' /><br /><br />
      <div className="input-group-append">
      <Dropdown>
        <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
        All
        </Dropdown.Toggle>

        <Dropdown.Menu>
         <Dropdown.Item href="#/action-1">Titles</Dropdown.Item>
         <Dropdown.Item href="#/action-2">TV Episodes</Dropdown.Item>
         <Dropdown.Item href="#/action-3">Celebs</Dropdown.Item>
         <Dropdown.Item href="#/action-3">Companies</Dropdown.Item>
       </Dropdown.Menu>
     </Dropdown>

      </div>
     </div>
    )
  }
}
