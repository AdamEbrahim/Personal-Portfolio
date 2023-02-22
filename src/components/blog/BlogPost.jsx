import React from "react";
import bloglist from "../../editable-stuff/blog";
import { useParams } from "react-router-dom";

const BlogPost = React.forwardRef((match, ref) => {
  const params = useParams();
  const post = bloglist[params.id];

  return (
    <div className="container-lg mt-5">
      {post && (
        <div>
          <h1 ref={ref} className="display-2 text-center">{post.title}</h1>
          <img className="img-fluid mb-2" src={post.image} alt={post.title} />
          {post.getBlog()}
        </div>
      )}
      {!post && <h1 className="display-1 text-center">404 - Page not found</h1>}
    </div>
  );
});

export default BlogPost;
