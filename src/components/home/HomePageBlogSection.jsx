import { homePageblogList } from "@/data/BlogList";
import BlogItem from "../blog/BlogItem";

const HomePageBlogSection = () => {
  const renderedBlogList = homePageblogList.map((blog) => {
    return (
      <BlogItem
        key={blog.id}
        blog={blog}
        className="col-lg-4 col-md-6 col-sm-6"
      />
    );
  });

  return (
    <section className="latest spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <span>Latest News</span>
              <h2>Automotive New Trends</h2>
            </div>
          </div>
        </div>
        <div className="row">{renderedBlogList}</div>
      </div>
    </section>
  );
};

export default HomePageBlogSection;
