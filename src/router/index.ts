import LHDiscover from "@/pages/discover";
import LHFriend from "@/pages/friend";
import LHMine from "@/pages/mine";
import LHAlbum from "@/pages/discover/c-pages/album";
import LHArtist from "@/pages/discover/c-pages/artist";
import LHDjradio from "@/pages/discover/c-pages/djradio";
import LHRanking from "@/pages/discover/c-pages/ranking";
import LHRecommend from "@/pages/discover/c-pages/recommend";
import LHSongs from "@/pages/discover/c-pages/songs";
import LHPlay from '@/pages/player'
import { LHRedirect, LHDiscoverRedirect } from "@/pages/redirect";

export default [
  {
    path: "/",
    exact: true,
    component: LHRedirect,
  },
  {
    path: "/discover",
    component: LHDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        component: LHDiscoverRedirect,
      },
      {
        path: "/discover/recommend",
        component: LHRecommend,
      },
      {
        path: "/discover/ranking",
        component: LHRanking,
      },
      {
        path: "/discover/songs",
        component: LHSongs,
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: LHDjradio,
      },
      {
        path: "/discover/artist",
        component: LHArtist,
      },
      {
        path: "/discover/album",
        component: LHAlbum,
      },
      {
        path: "/discover/player",
        component: LHPlay,
      },
    ],
  },
  {
    path: "/mine",
    component: LHMine,
  },
  {
    path: "/friend",
    component: LHFriend,
  },
];
