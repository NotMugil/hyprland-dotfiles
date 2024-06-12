"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[1621],{73229:(e,t,n)=>{n.d(t,{G:()=>o});var a=n(79474),s=n(13274);const o=e=>(0,s.jsx)(a.Suspense,{fallback:null,children:(0,a.createElement)((0,a.lazy)((async()=>{const{FeatureActivationSection:e}=await Promise.all([n.e(4151),n.e(3417)]).then(n.bind(n,13294));return{default:e}})),e)})},87550:(e,t,n)=>{n.r(t),n.d(t,{SKELETON_CARDS_COUNT:()=>E,default:()=>L});var a=n(79474),s=n(16579),o=n(97500),i=n.n(o),c=n(99754),r=n(83648),l=n(14056),m=n(64647),d=n(82089),u=n(19277),h=n(63192),g=n(15891),S=n(26360),p=n(45640),f=n(11114),x=n(33560),y=n(43329),_=n(73229),j=n(98196),w=n(67447),H=n(52688),v=n(13274);const D=({section:e})=>(0,v.jsx)(w.p,{pageId:e.uri,title:e.data.title?.text??"",showAll:!0,index:0,id:e.uri,rowGap:j.lT,fullPage:!0,children:e.sectionItems.items.map(H.G)});var I=n(46232),A=n(46737),O=n(65132),b=n(70256);const C=({section:e})=>(0,v.jsx)(O.x,{config:(0,b.s1)(b.yV.MUSIC_VIDEOS),children:(0,v.jsx)(w.p,{pageId:e.uri,title:l.Ru.get("music_videos"),showAll:!0,index:0,id:e.uri,rowGap:(0,I.po)("looser"),fullPage:!0,children:e.sectionItems.items.map(((e,t)=>{if("TrackResponseWrapper"!==e.content.__typename||"Track"!==e.content.data.__typename)return null;const n=e.content.data;return(0,v.jsx)(A.O,{title:n.name,trackUri:n.uri,artists:n.artists.items,album:n.albumOfTrack,contentRating:n.contentRating,referrerIdentifier:"other",index:t},n.uri)}))})});var k=n(99411);const N=({section:e})=>{switch(e.data?.__typename){case"HomeGenericSectionData":return(0,v.jsx)(D,{section:(0,k.M)(e,e.data)});case"HomeMusicVideosSectionData":return(0,v.jsx)(C,{section:(0,k.M)(e,e.data)});case"HomeShortsSectionData":case"HomeRecentlyPlayedSectionData":case"HomeFeedBaselineSectionData":case"HomeNativeAdsSectionData":case"HomeOnboardingSectionData":case"HomeGridSectionData":case"HomeSpotlightSectionData":case null:case void 0:case"HomeFeatureActivationSectionData":case"HomeWatchFeedSectionData":case"HomeOnboardingSectionDataV2":case"HomeYourDJSectionData":return null;case"HomeFeatureActivationSectionDataV2":return(0,v.jsx)(_.G,{sectionItems:e.sectionItems.items,showAll:!0,uri:e.uri,localStorageKey:e.data.localStorageKey});default:return(0,p.k)(e.data),null}};var P=n(85406),R=n(5566);const F=(0,a.memo)((({cardCount:e})=>(0,v.jsx)(R._,{isLoading:!0,showAll:!0,withTitle:!0,children:[...new Array(e).keys()].map(((e,t)=>(0,v.jsx)(P.u,{isLoading:!0},t)))})));var T=n(43603),G=n(85257);const E=10,M=({uri:e})=>{const t=(0,r.zy)(),n=new URLSearchParams(t.search).get("pCountry"),o=(0,c.d4)(x.JJ),{request:m}=(0,a.useContext)(g.j),{data:_,isLoading:j,error:w,fetchNextPage:H}=(0,s.q)({queryKey:["homeV2","section",e,{numberOfItems:20}],queryFn:async({pageParam:t})=>(0,S.c)(m,y.U3,{uri:e,timeZone:(0,T.Ff)(),sp_t:(0,h.v8)("sp_t")??"",country:n??o,sectionItemsOffset:t,sectionItemsLimit:20}),initialPageParam:0,getNextPageParam:e=>{if("HomeSectionCollection"===e?.data?.homeSections?.__typename&&"HomeSection"===e.data.homeSections.sections[0]?.__typename){const t=e.data.homeSections.sections[0]?.sectionItems.pagingInfo;return t.nextOffset&&t.nextOffset>0?t.nextOffset:void 0}},gcTime:T.gO,staleTime:T.jl}),D=(0,a.useMemo)((()=>_?.pages?_.pages.reduce(((e,t)=>{if(!t?.data?.homeSections||"HomeSectionCollection"!==t?.data?.homeSections.__typename||0===t.data.homeSections.sections.length)return e;switch(t.data.homeSections.sections[0]?.__typename){case"HomeSection":return null===e?(0,f.h)(t.data.homeSections.sections[0]):(e.sectionItems.items=[...e.sectionItems.items,...t.data.homeSections.sections[0].sectionItems.items],e);case"GenericError":case"NotFound":return e;default:return(0,p.k)(t.data.homeSections.sections[0]),e}}),null):null),[_?.pages]);if(j)return(0,v.jsx)("section",{"data-testid":"home-page",children:(0,v.jsx)("div",{className:G.A.home,children:(0,v.jsx)("div",{className:i()(G.A.content,"contentSpacing"),children:(0,v.jsx)(F,{cardCount:E})})})});if(null!==w)return(0,v.jsx)(d.A,{hasError:!0,errorMessage:l.Ru.get("error.generic")});const I=_?.pages[0]?.data?.homeSections;return"HomeSectionCollection"!==I?.__typename||0===I.sections.length||"HomeSection"!==I.sections[0]?.__typename||null===D?(0,v.jsx)(d.A,{hasError:!0,errorMessage:l.Ru.get("error.generic")}):(0,v.jsx)("section",{"data-testid":"home-section-page",children:(0,v.jsx)(u._,{onReachBottom:H,children:(0,v.jsx)("div",{className:i()(G.A.home),children:(0,v.jsx)("div",{className:i()(G.A.content,"contentSpacing"),children:(0,v.jsx)(N,{section:D})})})})})},L=({uri:e})=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(m.Q,{children:l.Ru.get("page.generic-title")}),(0,v.jsx)(M,{uri:e})]})},11114:(e,t,n)=>{n.d(t,{h:()=>a});n(14269),n(90184);function a(e){return"object"!=typeof e||null===e?e:window.structuredClone?window.structuredClone(e):JSON.parse(JSON.stringify(e))}}}]);
//# sourceMappingURL=home-v2-section.js.map