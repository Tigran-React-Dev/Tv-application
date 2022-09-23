import { GET_VIDEO_DATA, SELECT_VIDEO ,CHANGE_CATEGORY, LOADING_FIRST_VIDEO} from "./TVaction";
import resurse from "../../assets/data.json";
export const initialstate = {
  videoList: [],
  activeCategory: [],
  lastvideo: {},
};

export const TVreducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_VIDEO_DATA: {
      return {
        ...state,
        videoList: resurse.TendingNow,
        activeCategory: resurse.TendingNow.filter((video) =>
          action.payload.includes(video.Category)
        ),
      };
    }

    case SELECT_VIDEO: {
      let lastVideo = state.activeCategory.find(
        (item) => item.Id == action.payload.id
      );
      if (lastVideo) {
        sessionStorage.setItem("lastvideo", JSON.stringify(lastVideo));
        return {
          ...state,
          lastvideo: lastVideo,
        };
      }
    }
    case CHANGE_CATEGORY :{
        return {
            ...state,
             activeCategory: resurse.TendingNow.filter((video) =>
              action.payload.includes(video.Category)
            ),
        }
    }
    case LOADING_FIRST_VIDEO :{
      let lastVideo = JSON.parse(sessionStorage.getItem("lastvideo"));
        if(lastVideo!=undefined){
           return {
             ...state,
             lastvideo:lastVideo
          }
         }
      
    }

    default:
      return state;
  }
};
