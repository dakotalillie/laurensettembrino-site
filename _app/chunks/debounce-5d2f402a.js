function i(t,n){let e;return function(...u){const o=()=>{e=null,t(...u)};clearTimeout(e),e=setTimeout(o,n)}}export{i as d};
