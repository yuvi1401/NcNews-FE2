import React, { Component } from 'react';
import { changeVoteOnComment } from '../api';
import './Vottingcomment.css';
// import fontawesome from '@fortawesome/fontawesome';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUp, faArrowDown } from '@fortawesome/fontawesome-free-solid';

// fontawesome.library.add(faArrowUp, faArrowDown);
class VotesOnComments extends Component {
  state = {
    voteChange: 0
  };

  render() {
    //const{votes, commentId, type, articleId} = this.props;
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
        {/* <p>Votes: {parseInt(`${article.votes + voteChange}`)}</p> */}
        <span>Votes: {parseInt(`${this.props.votes + voteChange}`)}</span>
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

    console.log(articleId);
    changeVoteOnComment(articleId, voteNum, commentId).then(data => {
      //console.log(data);
      this.setState(state => {
        return { voteChange: state.voteChange + voteNum };
      });
    });
  };
}
export default VotesOnComments;
