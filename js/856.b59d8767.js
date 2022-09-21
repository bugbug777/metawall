(self["webpackChunkmetawall"]=self["webpackChunkmetawall"]||[]).push([[856],{5743:function(t){!function(e,r){t.exports=r()}(0,(function(){"use strict";var t=1e3,e=6e4,r=36e5,n="millisecond",s="second",o="minute",i="hour",a="day",d="week",u="month",c="quarter",l="year",h="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},y={s:g,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),s=r%60;return(e<=0?"+":"-")+g(n,2,"0")+":"+g(s,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),s=e.clone().add(n,u),o=r-s<0,i=e.clone().add(n+(o?-1:1),u);return+(-(n+(r-s)/(o?s-i:i-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:l,w:d,d:a,D:h,h:i,m:o,s:s,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},w="en",v={};v[w]=p;var $=function(t){return t instanceof M},k=function t(e,r,n){var s;if(!e)return w;if("string"==typeof e){var o=e.toLowerCase();v[o]&&(s=o),r&&(v[o]=r,s=o);var i=e.split("-");if(!s&&i.length>1)return t(i[0])}else{var a=e.name;v[a]=e,s=a}return!n&&s&&(w=s),s||!n&&w},_=function(t,e){if($(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new M(r)},D=y;D.l=k,D.i=$,D.w=function(t,e){return _(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var M=function(){function p(t){this.$L=k(t.locale,null,!0),this.parse(t)}var g=p.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(m);if(n){var s=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return D},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(t,e){var r=_(t);return this.startOf(e)<=r&&r<=this.endOf(e)},g.isAfter=function(t,e){return _(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<_(t)},g.$g=function(t,e,r){return D.u(t)?this[e]:this.set(r,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var r=this,n=!!D.u(e)||e,c=D.p(t),f=function(t,e){var s=D.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?s:s.endOf(a)},m=function(t,e){return D.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},b=this.$W,p=this.$M,g=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case l:return n?f(1,0):f(31,11);case u:return n?f(1,p):f(0,p+1);case d:var w=this.$locale().weekStart||0,v=(b<w?b+7:b)-w;return f(n?g-v:g+(6-v),p);case a:case h:return m(y+"Hours",0);case i:return m(y+"Minutes",1);case o:return m(y+"Seconds",2);case s:return m(y+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var r,d=D.p(t),c="set"+(this.$u?"UTC":""),f=(r={},r[a]=c+"Date",r[h]=c+"Date",r[u]=c+"Month",r[l]=c+"FullYear",r[i]=c+"Hours",r[o]=c+"Minutes",r[s]=c+"Seconds",r[n]=c+"Milliseconds",r)[d],m=d===a?this.$D+(e-this.$W):e;if(d===u||d===l){var b=this.clone().set(h,1);b.$d[f](m),b.init(),this.$d=b.set(h,Math.min(this.$D,b.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[D.p(t)]()},g.add=function(n,c){var h,f=this;n=Number(n);var m=D.p(c),b=function(t){var e=_(f);return D.w(e.date(e.date()+Math.round(t*n)),f)};if(m===u)return this.set(u,this.$M+n);if(m===l)return this.set(l,this.$y+n);if(m===a)return b(1);if(m===d)return b(7);var p=(h={},h[o]=e,h[i]=r,h[s]=t,h)[m]||1,g=this.$d.getTime()+n*p;return D.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=D.z(this),o=this.$H,i=this.$m,a=this.$M,d=r.weekdays,u=r.months,c=function(t,r,s,o){return t&&(t[r]||t(e,n))||s[r].slice(0,o)},l=function(t){return D.s(o%12||12,t,"0")},h=r.meridiem||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:D.s(a+1,2,"0"),MMM:c(r.monthsShort,a,u,3),MMMM:c(u,a),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:c(r.weekdaysMin,this.$W,d,2),ddd:c(r.weekdaysShort,this.$W,d,3),dddd:d[this.$W],H:String(o),HH:D.s(o,2,"0"),h:l(1),hh:l(2),a:h(o,i,!0),A:h(o,i,!1),m:String(i),mm:D.s(i,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:s};return n.replace(b,(function(t,e){return e||m[t]||s.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(n,h,f){var m,b=D.p(h),p=_(n),g=(p.utcOffset()-this.utcOffset())*e,y=this-p,w=D.m(this,p);return w=(m={},m[l]=w/12,m[u]=w,m[c]=w/3,m[d]=(y-g)/6048e5,m[a]=(y-g)/864e5,m[i]=y/r,m[o]=y/e,m[s]=y/t,m)[b]||y,f?w:D.a(w)},g.daysInMonth=function(){return this.endOf(u).$D},g.$locale=function(){return v[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=k(t,e,!0);return n&&(r.$L=n),r},g.clone=function(){return D.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},p}(),S=M.prototype;return _.prototype=S,[["$ms",n],["$s",s],["$m",o],["$H",i],["$W",a],["$M",u],["$y",l],["$D",h]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),_.extend=function(t,e){return t.$i||(t(e,M,_),t.$i=!0),_},_.locale=k,_.isDayjs=$,_.unix=function(t){return _(1e3*t)},_.en=v[w],_.Ls=v,_.p={},_}))},4799:function(t,e,r){"use strict";var n=r(3766);e["Z"]=(0,n.Q_)("statusStore",{state:()=>({isLoading:!1,hideSidebar:!1})})},5220:function(t,e,r){"use strict";var n=r(3766);e["Z"]=(0,n.Q_)("userStore",{state:()=>({id:"",name:"",avatar:""})})},1815:function(t,e,r){"use strict";r.d(e,{J:function(){return o},X:function(){return i}});var n=r(5743),s=r.n(n);const o=t=>{const e=s()(t).format("YYYY/MM/DD HH:MM");return e},i=t=>{const e=s()().diff(s()(t),"h"),r=Math.floor(e/24),n=e%24,o=`${r} 天又 ${n} 小時`;return o}},2452:function(t,e,r){"use strict";r.d(e,{Z:function(){return f}});var n=r(3396),s=r(7139);const o={class:"card card-shadow-2 | rounded-8 border-2 border-dark | mb-4"},i=(0,n._)("div",{class:"card-header border-2 border-dark rounded-top-8 | bg-white | p-4"},[(0,n._)("div",{class:"trafic-light"},[(0,n._)("div",{class:"trafic-light-yellow"})])],-1),a={class:"card-body | p-8"},d={class:"card-text text-center text-secondary"};function u(t,e,r,u,c,l){return(0,n.wg)(),(0,n.iD)("div",o,[i,(0,n._)("div",a,[(0,n._)("p",d,(0,s.zw)(u.content?u.content:"目前尚無動態，新增一則貼文吧！"),1)])])}var c={props:["msg"],setup(t){const e=t.msg;return{content:e}}},l=r(89);const h=(0,l.Z)(c,[["render",u]]);var f=h},4407:function(t,e,r){"use strict";r.d(e,{Z:function(){return w}});var n=r(3396),s=r(7139),o=r(9242);const i={class:"d-flex mb-4"},a={class:"dropdown me-3"},d={class:"w-md-156 | d-flex justify-content-between align-items-center | dropdown-toggle | btn btn-white | border rounded-0 border-2 border-dark | fs-6 | py-3 px-4",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},u={class:"dropdown-menu | border-2 rounded-0 border-dark | text-center | py-0","aria-labelledby":"dropdownMenuButton1"},c={class:"border-bottom border-2 border-dark"},l={class:"input-group"},h=(0,n._)("i",{class:"bi bi-search fs-5"},null,-1),f=[h];function m(t,e,r,h,m,b){return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",a,[(0,n._)("button",d,(0,s.zw)(h.workingName),1),(0,n._)("ul",u,[(0,n._)("li",c,[(0,n._)("button",{onClick:e[0]||(e[0]=t=>h.sortPosts(-1)),type:"button",class:"dropdown-item | py-2",href:"#"}," 最新貼文 ")]),(0,n._)("li",null,[(0,n._)("button",{onClick:e[1]||(e[1]=t=>h.sortPosts(1)),type:"button",class:"dropdown-item | py-2"}," 從最舊到最新 ")])])]),(0,n._)("div",l,[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>h.keyword=t),onKeyup:e[3]||(e[3]=(0,o.D2)(((...t)=>h.searchPost&&h.searchPost(...t)),["enter"])),type:"text",class:"form-control | rounded-0 border-2 border-dark border-end-0 | py-3 px-4",placeholder:"搜尋貼文","aria-label":"搜尋貼文","aria-describedby":"button-addon2",title:"對貼文內容進行搜索"},null,544),[[o.nr,h.keyword,void 0,{trim:!0}]]),(0,n._)("button",{onClick:e[4]||(e[4]=(...t)=>h.searchPost&&h.searchPost(...t)),class:"btn btn-primary | rounded-0 border-2 border-dark | px-4",type:"button",id:"button-addon2"},f)])])}var b=r(4870),p={setup(t,{emit:e}){const r=(0,b.iH)(""),n=(0,b.iH)("最新貼文"),s=t=>{n.value=-1===t?"最新貼文":"從最舊到最新",e("sort-posts","",t)},o=()=>{e("search-keyword",r.value),r.value=""};return{sortPosts:s,keyword:r,searchPost:o,workingName:n}}},g=r(89);const y=(0,g.Z)(p,[["render",m]]);var w=y},5856:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return V}});var n=r(3396),s=r(7139);const o={key:0},i={class:"card-body | p-6 pb-2"},a={class:"d-flex | mb-4"},d=["src"],u={class:"card-title mb-0"},c=["datetime"],l={class:"card-text | mb-4"},h={key:0,class:"ratio ratio-16x9 | mb-4"},f=["src"],m={class:"d-flex flex-row-reverse flex-sm-row align-items-center | mb-4"},b={key:0,class:"d-sm-none | font-baloo | me-4"},p=["onClick"],g=(0,n._)("i",{class:"d-flex align-items-center bi bi-hand-thumbs-up | fs-5 text-primary"},null,-1),y=[g],w={key:1,class:"font-baloo text-secondary"},v={key:2,class:"d-none d-sm-block | font-baloo"},$={class:"d-sm-flex align-items-center | mb-5"},k=["src"],_={class:"card-body"},D={class:"d-flex | mb-1"},M=["src"],S={class:"card-title | mb-0"},x=["datetime"],C={class:"card-text | ms-13"};function O(t,e,r,g,O,H){const Y=(0,n.up)("Searchbar"),Z=(0,n.up)("router-link"),z=(0,n.up)("Commentbar"),P=(0,n.up)("NoPost");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(Y,{onSortPosts:g.getPosts,onSearchKeyword:g.getPosts},null,8,["onSortPosts","onSearchKeyword"]),g.posts.length?((0,n.wg)(),(0,n.iD)("ul",o,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(g.posts,(t=>((0,n.wg)(),(0,n.iD)("li",{key:t._id,class:"card card-shadow-2 | rounded-8 border-2 border-dark | mb-4"},[(0,n._)("div",i,[(0,n._)("div",a,[(0,n._)("img",{src:t.user.avatar,alt:"avatar",class:"image-size-45 | border rounded-circle border-2 border-dark | me-4"},null,8,d),(0,n._)("h5",u,[(0,n.Wm)(Z,{class:"d-block | link-dark hover-userlink | fw-bold fs-6 lh-base",to:`/posts/user/${t.user._id}`},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(t.user.name),1)])),_:2},1032,["to"]),(0,n._)("time",{datetime:t.createdAt,class:"d-block | fs-8 text-secondary lh-16"},(0,s.zw)(g.timeFilter(t.createdAt)),9,c)])]),(0,n._)("p",l,(0,s.zw)(t.content),1),t.imageUrl?((0,n.wg)(),(0,n.iD)("div",h,[(0,n._)("img",{src:t.imageUrl,alt:"photo",class:"image-control | border rounded-8 border-2 border-dark"},null,8,f)])):(0,n.kq)("",!0),(0,n._)("div",m,[0!==t.likes.length?((0,n.wg)(),(0,n.iD)("span",b,(0,s.zw)(t.likes.length),1)):(0,n.kq)("",!0),(0,n._)("button",{onClick:e=>g.toogleLike(t._id,t.likes),type:"button",class:"me-sm-2"},y,8,p),0===t.likes.length?((0,n.wg)(),(0,n.iD)("span",w,"成為第一個按讚的朋友")):((0,n.wg)(),(0,n.iD)("span",v,(0,s.zw)(t.likes.length),1))]),(0,n._)("div",$,[(0,n._)("img",{src:g.user.avatar,alt:"avatar",class:"d-none d-sm-block image-size-40 | border rounded-circle border-2 border-dark | me-2"},null,8,k),(0,n.Wm)(z,{"post-id":t._id,onSendComment:g.addComment},null,8,["post-id","onSendComment"])]),(0,n._)("ul",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.comments,(t=>((0,n.wg)(),(0,n.iD)("li",{key:t._id,class:"card border-0 rounded-12 | bg-gray-1 bg-opacity-30 | mb-4"},[(0,n._)("div",_,[(0,n._)("div",D,[(0,n._)("img",{src:t.user.avatar,alt:"avatar",class:"image-size-40 | border rounded-circle border-2 border-dark me-3"},null,8,M),(0,n._)("h5",S,[(0,n.Wm)(Z,{class:"d-block link-dark hover-userlink | fs-6 lh-base",to:`/posts/user/${t.user._id}`},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(t.user.name),1)])),_:2},1032,["to"]),(0,n._)("time",{datetime:t.createdAt,class:"d-block text-secondary fs-8 lh-16"},(0,s.zw)(g.timeFilter(t.createdAt)),9,x)])]),(0,n._)("p",C,(0,s.zw)(t.content),1)])])))),128))])])])))),128))])):((0,n.wg)(),(0,n.j4)(P,{key:1,msg:g.msg},null,8,["msg"]))],64)}r(2801);var H=r(4407),Y=r(9242);const Z={class:"input-group"};function z(t,e,r,s,o,i){return(0,n.wg)(),(0,n.iD)("div",Z,[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>s.comment=t),type:"text",class:"form-control | rounded-0 border-2 border-dark border-end-0 | py-2 px-4",placeholder:"留言...","aria-label":"留言","aria-describedby":"button-addon2"},null,512),[[Y.nr,s.comment]]),(0,n._)("button",{onClick:e[1]||(e[1]=(...t)=>s.sendComment&&s.sendComment(...t)),class:"btn btn-primary btn-hover-warning | rounded-0 border-2 border-dark | px-4 px-sm-12",type:"button",id:"button-addon2"}," 留言 ")])}var P=r(4870),L={props:["postId"],setup({postId:t},{emit:e}){const r=(0,P.iH)(""),n=()=>{e("sendComment",{postId:t,content:r.value})};return{comment:r,sendComment:n}}},W=r(89);const T=(0,W.Z)(L,[["render",z]]);var A=T,I=r(2452),U=r(5220),N=r(4799),F=r(8042),J=r(1815),j={components:{Searchbar:H.Z,Commentbar:A,NoPost:I.Z},setup(){const t=localStorage.getItem("jwt"),e=(0,N.Z)(),r=(0,U.Z)(),s=(0,P.iH)([]),o=(0,P.iH)(""),i=async(t,r=-1)=>{e.isLoading=!0;try{const n=await(0,F.Z)("/posts","get",{sort:r,keyword:t});s.value=n.data.posts,!s.value.length&&t&&(o.value="沒有找到匹配的貼文！"),e.isLoading=!1}catch(n){console.log(n)}};(0,n.bv)((()=>{i()}));const a=async(e,r)=>{const n=JSON.parse(atob(t.split(".")[1])).id;let s,o;r.find((t=>t===n))?(s="delete",o="unlike"):(s="post",o="like");const a=`/posts/${e}/${o}`;try{await(0,F.Z)(a,s,n),i()}catch(d){console.log(d)}},d=async({postId:t,content:e})=>{const r=`/posts/${t}/comment`;try{await(0,F.Z)(r,"post",{content:e}),i()}catch(n){console.log(n)}};return{user:r,posts:s,getPosts:i,toogleLike:a,addComment:d,timeFilter:J.J,msg:o}}};const K=(0,W.Z)(j,[["render",O]]);var V=K}}]);
//# sourceMappingURL=856.b59d8767.js.map