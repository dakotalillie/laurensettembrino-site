import{h as c,al as l,am as n,a6 as t,an as v}from"./runtime.BBsI4_9W.js";import{a as u}from"./render.CUMNnJOz.js";function p(s){if(c){var r=!1,a=()=>{if(!r){if(r=!0,s.hasAttribute("value")){var e=s.value;f(s,"value",null),s.value=e}if(s.hasAttribute("checked")){var _=s.checked;f(s,"checked",null),s.checked=_}}};s.__on_r=a,l(a),u()}}function f(s,r,a,e){var _=s.__attributes??(s.__attributes={});c&&(_[r]=s.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&s.nodeName==="LINK")||_[r]!==(_[r]=a)&&(r==="style"&&"__styles"in s&&(s.__styles={}),r==="loading"&&(s[n]=a),a==null?s.removeAttribute(r):typeof a!="string"&&d(s).includes(r)?s[r]=a:s.setAttribute(r,a))}var o=new Map;function d(s){var r=o.get(s.nodeName);if(r)return r;o.set(s.nodeName,r=[]);for(var a,e=t(s),_=Element.prototype;_!==e;){a=v(e);for(var i in a)a[i].set&&r.push(i);e=t(e)}return r}function A(s,r){var a=s.__className,e=h(r);c&&s.className===e?s.__className=e:(a!==e||c&&s.className!==e)&&(r==null?s.removeAttribute("class"):s.className=e,s.__className=e)}function h(s){return s??""}function y(s,r,a){if(a){if(s.classList.contains(r))return;s.classList.add(r)}else{if(!s.classList.contains(r))return;s.classList.remove(r)}}export{A as a,p as r,f as s,y as t};