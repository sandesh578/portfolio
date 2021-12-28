import React from "react";
import "./Project.css";
import Project1 from '../../img/portfolio-1.jpg';
import Project2 from '../../img/portfolio-2.jpg';
import Project3 from '../../img/portfolio-3.jpg';
import Project4 from '../../img/portfolio-4.jpg';

function Project() {
  return (
    <div className="project component_space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
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
                             <img src={Project1} alt="" className="project_img" />
                         </div>
                         <div className="mask_effect"></div>
                     </div>
                     <div className="project_meta absolute">
                     <h5 className="project_text">Development</h5>
                     <h4 className="project_text">Getting tickets to the big show</h4>
                     <a href="#" className="project_btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col_3">
                 <div className="project_box pointer relative">
                     <div className="project_box_img pointer relative">
                         <div className="project_img_box">
                             <img src={Project2} alt="" className="project_img" />
                         </div>
                         <div className="mask_effect"></div>
                     </div>
                     <div className="project_meta absolute">
                     <h5 className="project_text">Development</h5>
                     <h4 className="project_text">Getting tickets to the big show</h4>
                     <a href="#" className="project_btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col_3">
                 <div className="project_box pointer relative">
                     <div className="project_box_img pointer relative">
                         <div className="project_img_box">
                             <img src={Project3} alt="" className="project_img" />
                         </div>
                         <div className="mask_effect"></div>
                     </div>
                     <div className="project_meta absolute">
                     <h5 className="project_text">Development</h5>
                     <h4 className="project_text">Getting tickets to the big show</h4>
                     <a href="#" className="project_btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col_3">
                 <div className="project_box pointer relative">
                     <div className="project_box_img pointer relative">
                         <div className="project_img_box">
                             <img src={Project4} alt="" className="project_img" />
                         </div>
                         <div className="mask_effect"></div>
                     </div>
                     <div className="project_meta absolute">
                     <h5 className="project_text">Development</h5>
                     <h4 className="project_text">Getting tickets to the big show</h4>
                     <a href="#" className="project_btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col_3">
                 <div className="project_box pointer relative">
                     <div className="project_box_img pointer relative">
                         <div className="project_img_box">
                             <img src={Project3} alt="" className="project_img" />
                         </div>
                         <div className="mask_effect"></div>
                     </div>
                     <div className="project_meta absolute">
                     <h5 className="project_text">Development</h5>
                     <h4 className="project_text">Getting tickets to the big show</h4>
                     <a href="#" className="project_btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col_3">
                 <div className="project_box pointer relative">
                     <div className="project_box_img pointer relative">
                         <div className="project_img_box">
                             <img src={Project4} alt="" className="project_img" />
                         </div>
                         <div className="mask_effect"></div>
                     </div>
                     <div className="project_meta absolute">
                     <h5 className="project_text">Development</h5>
                     <h4 className="project_text">Getting tickets to the big show</h4>
                     <a href="#" className="project_btn">View Details</a>
                     </div>
                 </div>
             </div>
             
             <div className="view_more_btn d_flex align_items_center justify_content_center pxy_30">
             <button className="view_more pointer btn">View more</button>
             </div>

           </div>
       </div>
    </div>
  );
}

export default Project;
