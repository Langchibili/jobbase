import React, { Component } from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

class RatingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0
    };
  }

  handleStarClick = (rating) => {
    this.setState({rating})
    this.props.getRating(rating)
  };

  render() {
    const { rating } = this.state;

    return (
      <div className="rating-form">
        {[1, 2, 3, 4, 5].map((index) => (
          <span key={index} onClick={() => this.handleStarClick(index)}>
            {index <= rating ? <StarIcon /> : <StarBorderIcon />}
          </span>
        ))}
      </div>
    );
  }
}

export default RatingForm;