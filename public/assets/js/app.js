(()=>{var e,r={641:()=>{function e(){var e=document.querySelector("#game-select").value,r=document.querySelectorAll(".squad-choices-layout."+e+" input:checked");if(r.length>=2){for(var t=Math.floor(Math.random()*r.length),a=Math.floor(Math.random()*r.length);t===a;)a=Math.floor(Math.random()*r.length);var o=r[t],n=r[a];document.querySelector("#squad-member-1 img").src="assets/images/"+o.attributes["data-img"].value+".jpg",document.querySelector("#squad-member-2 img").src="assets/images/"+n.attributes["data-img"].value+".jpg",document.querySelector("#squad-member-1 .card-heading").textContent=o.value,document.querySelector("#squad-member-2 .card-heading").textContent=n.value}else document.querySelector("#squad-member-1 img").src="assets/images/n7.png",document.querySelector("#squad-member-2 img").src="assets/images/n7.png",document.querySelector("#squad-member-1 .card-heading").textContent="Squad Member",document.querySelector("#squad-member-2 .card-heading").textContent="Squad Member"}document.querySelector("#game-select").addEventListener("change",(function(){var r=document.querySelector("#game-select").value;document.querySelectorAll(".squad-choices-layout").forEach((function(e){return e.classList.add("hidden")})),document.querySelector(".squad-choices-layout."+r).classList.remove("hidden"),e()})),document.querySelector("#randomize-squad").addEventListener("click",e)},837:()=>{}},t={};function a(e){var o=t[e];if(void 0!==o)return o.exports;var n=t[e]={exports:{}};return r[e](n,n.exports,a),n.exports}a.m=r,e=[],a.O=(r,t,o,n)=>{if(!t){var u=1/0;for(l=0;l<e.length;l++){for(var[t,o,n]=e[l],c=!0,d=0;d<t.length;d++)(!1&n||u>=n)&&Object.keys(a.O).every((e=>a.O[e](t[d])))?t.splice(d--,1):(c=!1,n<u&&(u=n));if(c){e.splice(l--,1);var s=o();void 0!==s&&(r=s)}}return r}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[t,o,n]},a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={449:0,464:0};a.O.j=r=>0===e[r];var r=(r,t)=>{var o,n,[u,c,d]=t,s=0;if(u.some((r=>0!==e[r]))){for(o in c)a.o(c,o)&&(a.m[o]=c[o]);if(d)var l=d(a)}for(r&&r(t);s<u.length;s++)n=u[s],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(l)},t=self.webpackChunksquad_randomizer=self.webpackChunksquad_randomizer||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),a.O(void 0,[464],(()=>a(641)));var o=a.O(void 0,[464],(()=>a(837)));o=a.O(o)})();