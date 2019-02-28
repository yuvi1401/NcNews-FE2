import React, { Component } from 'react';
import { changeVoteOnArticle } from '../api';
class Votes extends Component {
  state = {
    voteChange: 0
  };

  render() {
    const { voteChange } = this.state;
    return (
      <div>
        <button
          className="button"
          onClick={() => this.handleVoteChange(1)}
          disabled={voteChange === 1}
        >
          Vote Up
        </button>
        {/* <p>Votes: {parseInt(`${article.votes + voteChange}`)}</p> */}
        <p>Votes: {parseInt(`${this.props.articleVotes + voteChange}`)}</p>
        <button
          className="button"
          onClick={() => this.handleVoteChange(-1)}
          disabled={voteChange === -1}
        >
          Vote Down
        </button>
      </div>
    );
  }
  handleVoteChange = voteNum => {
    const { articleId } = this.props;

    //console.log(this.props);
    changeVoteOnArticle(articleId, voteNum).then(data => {
      //console.log(data);
      this.setState(state => {
        return { voteChange: state.voteChange + voteNum };
      });
    });
  };
}
export default Votes;
