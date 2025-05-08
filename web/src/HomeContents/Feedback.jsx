import React, { useState } from "react";
import "./style/Feedback.css";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your feedback!\nRating: ${rating} stars\nComment: ${comment}`);

  };

  return (
    <div className="feedback-container" id="feedback">
      <h2>Feedback</h2>
      <hr />
      <p className="headline">Your feedback = our secret ingredient for improvement!</p>
      <p className="subtext">
        Better experiences coming right up—<br />
        because you deserve the best!
      </p>
      <p className="subtext">
        Got a sec? Share your thoughts—<br />
        we’re all ears (and taste buds)!
      </p>

      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className={star <= (hover || rating) ? "on" : "off"} onClick={() => setRating(star)} onMouseEnter={() => setHover(star)} onMouseLeave={() => setHover(0)}>
            ★
          </span>
        ))}
      </div>

      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Help us spice things up—what can we do better?"
      ></textarea>

      <button onClick={handleSubmit}>Submit My Feedback</button>
    </div>
  );
};

export default Feedback;