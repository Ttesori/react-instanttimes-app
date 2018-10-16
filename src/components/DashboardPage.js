import React from 'react';
import Select from 'react-select';

import Result from './Result';
import Intro from './Intro';
import data from '../data';

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: {
        // Get value from URL if applicable
        value: props.match.params.slug
      }
    };
    // Map data to list options
    this.options = data.map((item) => ({
      value: item.slug,
      label: item.name
    }));
  }
  // Handle autocomplete state change
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    // Redirect to mapped URL
    this.props.history.push('/food/' + selectedOption.value);
  };
  render() {
    return (
      <div
        className="instanttimes-main container"
        style={{ maxWidth: '50rem' }}
      >
        <Intro />
        <Select
          className="instanttimes-main__select"
          classNamePrefix="react-select"
          isClearable={true}
          options={this.options}
          onChange={this.handleChange}
          openMenuOnClick={false}
          placeholder="Search for an ingredient or recipe type..."
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              text: 'orangered',
              primary25: '#FFF2CC',
              primary: '#ffc107'
            }
          })}
        />
        {this.state.selectedOption.value ? (
          <Result
            className="instanttimes-main__result"
            data={data.find(
              (element) => element.slug === this.state.selectedOption.value
            )}
          />
        ) : (
          <p className="instanttimes-main__result instanttimes-main__result--empty text-center text-black-50">
            Search above to find approximate Instant Pot cooking times for
            common ingredients and recipe types. As with anything
            cooking-related, your mileage may vary, so use these as a starting
            point and experiment!
          </p>
        )}
      </div>
    );
  }
}

export default DashboardPage;
