(()=>{var e,t,n,o,l=document.getElementById("id"),d=document.getElementById("name"),r=document.getElementById("password"),u=document.getElementById("confirmPw"),a=document.getElementById("joinBtn");a.disabled=!0;var g=function(){e&&t&&n&&o&&(a.disabled=!1,a.style.cursor="pointer",a.style.backgroundColor="#0095F6")};l.addEventListener("input",(function(t){t.target.value.length>0?(e=!0,l.style.backgroundColor="#E8F0FE",g()):(e=!1,l.style.backgroundColor="#FAFAFA")})),d.addEventListener("input",(function(e){e.target.value.length>0?(t=!0,d.style.backgroundColor="#E8F0FE",g()):(t=!1,d.style.backgroundColor="#FAFAFA")})),r.addEventListener("input",(function(e){e.target.value.length>5?(n=!0,r.style.backgroundColor="#E8F0FE",g()):(n=!1,r.style.backgroundColor="#FAFAFA")})),u.addEventListener("input",(function(e){e.target.value.length>5?(o=!0,u.style.backgroundColor="#E8F0FE",g()):(o=!1,u.style.backgroundColor="#FAFAFA")}))})();