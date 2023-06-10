import Image from "next/image";
import BlogItem from "./BlogItem";
import { blogList } from "@/data/BlogList";

const BlogPage = () => {
  const renderedBlogList = blogList.map((blog) => {
    return (
      <BlogItem
        key={blog.id}
        blog={blog}
        className="col-lg-4 col-md-6 col-sm-6"
      />
    );
  });
  return (
    <div>
      {" "}
      <div className="breadcrumb-blog set-bg" style={{ position: "relative" }}>
        <div>
          <div className="row">
            <div className="col-lg-12">
              <Image
                width={1905}
                height={350}
                src="/images/breadcrumb-bg.jpg"
                alt="sd"
              />
              <h2
                style={{
                  position: "absolute",
                  top: "40%",
                  right: "45%",
                  color: "white",
                  fontSize: "60px",
                }}
              >
                Our Blog
              </h2>
            </div>
          </div>
        </div>
      </div>
      <section className="blog spad">
        <div className="container">
          <div className="row">{renderedBlogList}</div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
