import React from "react";

function Home() {
  return (
    <section className="posts-section">
      <h1 className="section-title">Posts</h1>
      <button className="btn post-btn" type="button">
        Add post
      </button>
      <article className="container post">
        <section className="post-body">
          <h2 className="post-title">Post title</h2>
          <p className="post-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            ducimus accusantium ex, dolores commodi impedit earum totam quod
            ratione nemo?
          </p>
        </section>
        <section className="comment-section">
          <h3 className="comment-title">Comments</h3>
          <article className="comment">
            <p className="comment-body">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias, consectetur.
            </p>
            <p className="comment-author">
              Comment Author{" "}
              <span className="timestamp"> 06-09-20 @ 08:38</span>
            </p>
          </article>
          <button className="btn comment-btn" type="button">
            Add comment
          </button>
        </section>
      </article>
    </section>
  );
}

export default Home;
