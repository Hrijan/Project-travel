import React, { useState, useEffect} from 'react';
import axios from 'axios';

export default function Reviews() {
    const [post, setPost] = useState([])
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then(res => {
      console.log(res.data);
      setPost(res.data)
    });
    })
  return (
    <div className="reviews">
    <h1>Reviews</h1>
    <div className="container">
      <div className="row">
        {post.map((a) => (
          <div className="person-rev col-md-4">
            <h1>{a.name}</h1>
            <p>{a.body}</p>
            <span>{a.email}</span>
          </div>
        ))}
      </div>
    </div>
</div>
  )
}
