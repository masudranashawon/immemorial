const Blog = ({ needFullHight }) => {
  return (
    <section className={`blog wrapper ${needFullHight && "min-h-100vh"}`}>
      <h2 className='section-title'>Blog</h2>
      <h1>Blog coming soon....</h1>
    </section>
  );
};

export default Blog;
