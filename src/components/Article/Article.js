import React from "react";
import { durationEmoji } from "../../durationEmoji";

function Article({ title, date = "January 1, 1970", preview,minutes }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{durationEmoji(minutes)}</p>
    </article>
  );
}

export default Article;
