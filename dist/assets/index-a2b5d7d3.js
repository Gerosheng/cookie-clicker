(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const f of n.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&m(f)}).observe(document,{childList:!0,subtree:!0});function k(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function m(t){if(t.ep)return;t.ep=!0;const n=k(t);fetch(t.href,n)}})();const P=document.getElementById("cookieImage");document.getElementById("click-count");const C=document.getElementById("score");document.getElementById("clickButton");let o=0,r=1;P.addEventListener("click",()=>{o+=r,x()});function x(){C.textContent=o,o<50?C.style.color="red":C.style.color="green"}const y=document.getElementById("multiplierButton"),S=document.getElementById("multiplier-price");let d=20;function q(){S.textContent=d}function A(){y.textContent=`Multiplier x${r} ( x${r+1} Prix: $${d} )`}function O(){d=Math.ceil(d*1.5),q()}y.addEventListener("click",()=>{o>=d&&(o-=d,r+=1,O(),A(),C.textContent=o,y.disabled=o<d)});const b=document.getElementById("autoClickButton");let p=0,i=50,g=null;function T(){b.innerText=`Auto-Clicker x${p} (x${p+1} Prix: $${i})`}b.addEventListener("click",()=>{o>=i&&(o-=i,x(),p++,i+=Math.ceil(i*.15),T(),g||(g=setInterval(()=>{o+=r*p,x()},1e3)),b.disabled=o<i)});const D=document.querySelectorAll(".button");D.forEach(e=>{e.addEventListener("mouseover",()=>{e.style.backgroundColor="#72371b",e.style.color="#fbd81a"}),e.addEventListener("mouseout",()=>{e.style.backgroundColor="#fbd81a",e.style.color="#72371b"})});const u=document.getElementById("bonusButton"),N=document.getElementById("bonus-price");let l=100,a=0;function w(){l=Math.ceil(l*1.5),N.textContent=l}u.addEventListener("click",()=>{if(o>=l&&a===0){o-=l,a=30,w(),r*=2,u.textContent=`Bonus actif ( ${a}s )`;const e=setInterval(()=>{a>0?(a--,u.textContent=`Bonus actif ( ${a}s )`):(clearInterval(e),u.textContent=`Bonus (200%) - Prix: ${l}`,r/=2)},1e3);u.disabled=o<l}});const F=document.getElementById("resetButton");F.addEventListener("click",()=>{o=0,r=1,p=0,i=50,g&&(clearInterval(g),g=null),l=100,a=0,r=1,x(),b.innerText=`Auto-Clicker (Prix: $${i})`,y.textContent=`Multiplier x${r} (x${r+1} Prix: ${d} )`,u.textContent=`Bonus (200%) - Prix: ${l}`});const v=document.getElementsByClassName("rotation");function h(){for(let e=0;e<v.length;e++){let c=parseFloat(v[e].style.transform.replace("rotate(","").replace("deg)",""))||0;c+=.1,v[e].style.transform=`rotate(${c}deg)`}requestAnimationFrame(h)}h();const B=document.querySelector(".hamburger"),I=document.querySelector(".menu");B.addEventListener("click",()=>{B.classList.toggle("active"),I.classList.toggle("active")});document.querySelectorAll(".nav-btn").forEach(e=>e.addEventListener("click",()=>{B.classList.remove("active"),I.classList.remove("active")}));document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("dark-mode-toggle"),c=document.body,k=document.querySelector("header"),m=document.querySelectorAll(".clicker-container"),t=document.querySelector(".menu"),n=document.querySelectorAll(".bar");function f(){const E=c.classList.contains("dark-mode");L(!E)}function L(E){E?(c.classList.add("dark-mode"),document.body.style.color="#fff",k.style.backgroundColor="#212020",t.style.backgroundColor="#212020",n.forEach(s=>{s.style.backgroundColor="#fbd81a"}),m.forEach(s=>{s.style.boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;",s.style.backgroundColor="#212020"})):(c.classList.remove("dark-mode"),document.body.style.color="black",k.style.backgroundColor="#dfe6e9",t.style.backgroundColor="#dfe6e9",n.forEach(s=>{s.style.backgroundColor="#9a5738"}),m.forEach(s=>{s.style.boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;",s.style.backgroundColor="#fff"}))}e.addEventListener("change",function(){f()});const M=localStorage.getItem("darkMode")==="true";L(M)});function $(){b.disabled=o<i,y.disabled=o<d,u.disabled=o<l}$();setInterval($,100);