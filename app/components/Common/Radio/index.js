/**
 *
 * Checkbox
 *
 */

import React from 'react';

class Radio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      size: event.target.value,
    });
    this.props.handleChangeSubmit(event.target.name, event.target.value);
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <label>
              <input
                name='sorting'
                type='radio'
                value='Newest First'
                checked={this.state.size === 'Newest First'}
                onChange={this.handleChange}
              />
              Mas recientes primero
            </label>
          </li>

          <li>
            <label>
              <input
                name='sorting'
                type='radio'
                value='Precio mayor a menor'
                checked={this.state.size === 'Price High to Low'}
                onChange={this.handleChange}
              />
              Precio mayor a menor
            </label>
          </li>

          <li>
            <label>
              <input
                name='sorting'
                type='radio'
                value='Precio menor a mayor'
                checked={this.state.size === 'Price Low to High'}
                onChange={this.handleChange}
              />
              Precio menor a mayor
            </label>
          </li>
        </ul>
      </div>
    );
  }
}

export default Radio;
