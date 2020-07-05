import React from "react";

const Card = ({ quote, onNext }) => {
  return (
    <div id="khobza" className="card">
      <div id="author" className="card-header">
        {quote.author ? quote.author : "Unknown"}
      </div>
      <div id="text" className="card-body">
        {quote.text}
      </div>
      <div className="card-footer">
        <button id="new-quote" className="next" onClick={() => onNext()}>
          Next Quote
        </button>
        <button id="tweet">
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.text}%20${quote.author}`}
            
            target="_blank"
            rel="noopener noreferrer"
          >
            tweet
          </a>
        </button>
      </div>
    </div>
  );
};

export default Card;
