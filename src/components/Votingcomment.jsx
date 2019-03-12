import React, { Component } from 'react';
import { changeVoteOnComment } from '../api';
import './Vottingcomment.css';

class VotesOnComments extends Component {
  state = {
    voteChange: 0
  };

  render() {
    const { voteChange } = this.state;
    return (
      <div className="votescontainer">
        <button
          className="button"
          onClick={() => this.handleVoteChange(1)}
          disabled={voteChange === 1}
        >
          <i className="fas fa-arrow-up" />
        </button>

        <span>Votes: {`${this.props.votes + voteChange}`}</span>
        <button
          className="button"
          onClick={() => this.handleVoteChange(-1)}
          disabled={voteChange === -1}
        >
          <i className="fas fa-arrow-down" />
        </button>
      </div>
    );
  }
  handleVoteChange = voteNum => {
    const { articleId, commentId } = this.props;

    //console.log(articleId);
    changeVoteOnComment(articleId, voteNum, commentId).then(data => {
      this.setState(state => {
        return { voteChange: state.voteChange + voteNum };
      });
    });
  };
}
export default VotesOnComments;
