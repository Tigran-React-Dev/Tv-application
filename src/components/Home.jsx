import  React from "react"
import css from "../assets/style/Home.module.scss";
import {useSelector} from "react-redux"
import HomeSlider from "../view/HomeSlider";
import {HOME_PAGE} from "../urls"
import { Redirect, useHistory } from 'react-router-dom';
import activeCategoryIcon from "../assets/image/FeaturedTitleImage.png"
import Button from "../view/Button";


const Home = ()=>{

    const lastvideo =useSelector(({TVreducer})=>TVreducer.lastvideo);
   
    
   
     
    return (
         <div className={css.main}>
             <div className={css.lastvideoinfo}>
                 {lastvideo.Id ? 
                  
                  <div className={css.informationVideo}>
                      <p className={css.categoryname}>{lastvideo.Category}</p>
                      <img src={activeCategoryIcon} alt="categoryIcon" />
                      <div className={css.dateandduration}>
                           <span>{lastvideo.ReleaseYear}</span>
                           <span>{lastvideo.MpaRating}</span>
                           <span>{lastvideo.Duration}s</span>
                      </div>
                      <p className={css.description}>
                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, tempore ab tenetur in dolores maxime nemo iste culpa, esse perferendis suscipit libero. Aliquid,
                      </p>
                      <div className={css.playormoreinfobutton}>
                           <Button 
                            cn="play"
                            title="play"
                           />
                           <Button 
                            cn="moreinfo"
                            title="More Info"
                           />
                      </div>
                  </div>
                  :
                  null
                 }  
             </div>
             <div className={css.slider}>
                <p className={css.trendig}>Trending Now</p>
                   <HomeSlider/>
             </div>
         </div>
    )
}

export default Home;