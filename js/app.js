document.addEventListener("DOMContentLoaded",()=>{ 
  const routes = {
    home: {
      title:"Main Menu - THE Clarinet App",
      content: `<h2>Welcome</h2>
                <p>Pick a menu to explore tools and demos for practicing the clarinet.</p>
                <button class="action ripple" id="demoBtn">Run Demo Action</button>
                <div id="demoOutput" style="margin-top:12px;color:var(--muted)"></div>`
    },
    menu1: {
      title:"Menu 1 - THE Clarinet App",
      content:`<h2>Menu 1</h2><p>Content and tools for Menu 1.</p>`
    },
    menu2: {
      title:"Menu 2 - THE Clarinet App",
      content:`<h2>Menu 2</h2><p>Content and tools for Menu 2.</p>`
    },
    menu3: {
      title:"Menu 3 - THE Clarinet App",
      content:`<h2>Menu 3</h2><p>Content and tools for Menu 3.</p>`
    }
  };

  const contentEl = document.getElementById("main-content");
  const navButtons = Array.from(document.querySelectorAll("#main-nav .nav-btn"));

  function setActive(route){
    navButtons.forEach(b=>b.classList.toggle("active", b.dataset.route===route));
    const r = routes[route] || routes.home;
    document.title = r.title;
    contentEl.classList.remove("show");
    setTimeout(()=>{
      contentEl.innerHTML = r.content;
      contentEl.classList.add("show");
      attachDemo();
      attachRipples();
    }, 140);
  }

  navButtons.forEach(btn=>{
    btn.addEventListener("click", ()=> setActive(btn.dataset.route));
  });

  setActive("home");

  function attachDemo(){
    const demo = document.getElementById("demoBtn");
    if(!demo) return;
    demo.addEventListener("click", ()=>{
      const out = document.getElementById("demoOutput");
      const now = new Date().toLocaleTimeString();
      out.textContent = `Demo ran at ${now}`;
      out.style.opacity = 1;
      out.style.transition = "opacity .28s";
    });
  }

  function attachRipples(){
    const ripplers = document.querySelectorAll(".ripple");
    ripplers.forEach(el=>{
      if(el.dataset.rippleBound) return;
      el.dataset.rippleBound = "1";
      el.addEventListener("pointerdown", (e)=>{
        const rect = el.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height) * 1.6;
        const span = document.createElement("span");
        span.className = "ripple-effect";
        span.style.width = span.style.height = `${size}px`;
        span.style.left = `${e.clientX - rect.left - size/2}px`;
        span.style.top = `${e.clientY - rect.top - size/2}px`;
        el.appendChild(span);
        span.addEventListener("animationend", ()=> span.remove());
      });
    });
  }

  attachRipples();
});

// Updated: 2025-09-28T23:16:24.9433640-07:00 - force update for GitHub
