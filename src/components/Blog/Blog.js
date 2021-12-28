import React from "react";
import "./Blog.css";
import Blog1 from '../../img/blog-01.jpg';
import Blog2 from '../../img/blog-02.jpg';
import Blog3 from '../../img/blog-03.jpg';

function Blog() {
  return (
    <div className="blog component_space" id="Blog">
      <div className="heading">
        <h1 className="heading">Latest News</h1>
        <p className="heading p_color">
          There are many variations of passages of Lorem Ipsum available,
        </p>
        <p className="heading p_color">
          but the majority have suffered alteration.
        </p>
      </div>
      <div className="container">
          <div className="row">
              <div className="col_3">
              <div className="project_box pointer relative">
                     <div className="project_box_img pointer relative">
                         <div className="project_img_box">
                             <img src={Blog1} alt="" className="project_img" />
                         </div>
                         <div className="mask_effect"></div>
                     </div>
                      <div className="Blog_meta absolute">
                         <h5 className="project_text">Development</h5>
                         <h4 className="project_text">Getting tickets to the big show</h4>
                         <a href="#" className="blog project_btn btn">Read More</a>
                       </div>
                 </div>
              </div>

              <div className="col_3">
              <div className="project_box pointer relative">
                     <div className="project_box_img pointer relative">
                         <div className="project_img_box">
                             <img src={Blog2} alt="" className="project_img" />
                         </div>
                         <div className="mask_effect"></div>
                     </div>
                      <div className="Blog_meta absolute">
                         <h5 className="project_text">Development</h5>
                         <h4 className="project_text">Getting tickets to the big show</h4>
                         <a href="#" className="blog project_btn btn">Read More</a>
                       </div>
                 </div>
              </div>

              <div className="col_3">
              <div className="project_box pointer relative">
                     <div className="project_box_img pointer relative">
                         <div className="project_img_box">
                             <img src={Blog3} alt="" className="project_img" />
                         </div>
                         <div className="mask_effect"></div>
                     </div>
                      <div className="Blog_meta absolute">
                         <h5 className="project_text">Development</h5>
                         <h4 className="project_text">Getting tickets to the big show</h4>
                         <a href="#" className="blog project_btn btn">Read More</a>
                       </div>
                 </div>
              </div>

          </div>
      </div>
    </div>
  );
}

export default Blog;
