export const GET_VIDEO_DATA = "GET_VIDEO_DATA";
export const SELECT_VIDEO ="SELECT_VIDEO";
export const CHANGE_CATEGORY ="CHANGE_CATEGORY";
export const LOADING_FIRST_VIDEO="LOADING_FIRST_VIDEO";


export const getAllVideos = (Category)=>{
    return {
        type:GET_VIDEO_DATA,
        payload:Category
    }
}

export const selectVideo =(id)=>{
    return {
        type:SELECT_VIDEO,
        payload:{
            id
        }
    }
}

export const changeCategory =(params)=>{
      return {
        type:CHANGE_CATEGORY,
        payload:params
      }
}


export const loadetFirstvideo =()=>{
    return {
        type:LOADING_FIRST_VIDEO,
      }
}