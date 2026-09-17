(function(){const k="travelanywere_cookie_choice",b=document.querySelector(".consent");if(b&&!localStorage.getItem(k))b.classList.add("show");document.querySelectorAll("[data-consent]").forEach(x=>x.onclick=function(){localStorage.setItem(k,x.dataset.consent);if(b)b.classList.remove("show")});document.querySelectorAll("[data-year]").forEach(x=>x.textContent=new Date().getFullYear());const m=document.querySelector(".menu"),n=document.querySelector(".links");if(m&&n)m.onclick=function(){n.style.display=n.style.display==="flex"?"":"flex";n.style.flexDirection="column";n.style.position="absolute";n.style.right="18px";n.style.top="62px";n.style.background="#fffdfa";n.style.padding="18px";n.style.border="1px solid #e5e2d9";n.style.borderRadius="16px"};

function addProviderCards(){
  const cards={
    poferries:`<article class="card partner" data-po-ferries="true"><div class="brand-logo" aria-label="P&O Ferries"><strong style="font-size:1.35rem;line-height:1.05;display:block;text-align:center">P&O<br>FERRIES</strong></div><div class="tag">Ferries</div><h3>P&O Ferries</h3><p>Ferry crossings between the UK, France, the Netherlands and Ireland.</p><a class="btn sm" href="/brands/brand-po-ferries.html">Explore P&O Ferries</a></article>`,
    saily:`<article class="card partner" data-saily="true"><div class="brand-logo" aria-label="Saily"><strong style="font-size:1.55rem;line-height:1.05;display:block;text-align:center">SAILY<br><span style="font-size:.9rem;font-weight:500">eSIM</span></strong></div><div class="tag">Travel eSIM</div><h3>Saily</h3><p>Travel eSIM data plans for staying connected across 200+ destinations.</p><a class="btn sm" href="/brands/brand-saily.html">Explore Saily</a></article>`
  };
  const addToGrid=(grid,key)=>{if(grid&&!grid.querySelector(`[data-${key}]`))grid.insertAdjacentHTML("beforeend",cards[key]);};
  if(location.pathname==="/brands.html"||location.pathname==="/brands"){const grid=document.querySelector(".brand-grid");addToGrid(grid,"poferries");addToGrid(grid,"saily");}
  if(location.pathname==="/"||location.pathname==="/index.html"){
    const headings=document.querySelectorAll("h2");
    for(const h of headings){if(h.textContent.trim()==="Explore travel brands"){const grid=h.closest(".head")?.parentElement?.querySelector(".grid");addToGrid(grid,"poferries");addToGrid(grid,"saily");break;}}
  }
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",addProviderCards);else addProviderCards();
})();
