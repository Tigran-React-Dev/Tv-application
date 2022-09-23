import Home from "./components/Home";

//menu icons 
import homeIcon from "./assets/image/icons/Group46.png";
import TVshowsIcon from "./assets/image/icons/Group56.png";
import MoviesIcon from "./assets/image/icons/Group54.png";
import GenresIcon from "./assets/image/icons/Group53.png";
import WatchLaterIcon from "./assets/image/icons/Group47.png";

import { TV_SHOWS, MOVIES, GENRES, WATCH_LATER, HOME_PAGE } from './urls';




export const routes = [
    {
        id:1,
        component:Home,
        path:HOME_PAGE,
        exect:true,
        name:"Home",
        icon:homeIcon,

    },
    {
        id:2,
        component:Home,
        path:TV_SHOWS,
        exect:true,
        name:"TV Shows",
        icon:TVshowsIcon,

    },
    {
        id:3,
        component:Home,
        path:MOVIES,
        exect:true,
        name:"Movies",
        icon:MoviesIcon,

    },
    {
        id:4,
        component:Home,
        path:GENRES,
        exect:true,
        name:"Genres",
        icon:GenresIcon,

    },
    {
        id:5,
        component:Home,
        path:WATCH_LATER,
        exect:true,
        name:"Watch later",
        icon:WatchLaterIcon,

    }
]