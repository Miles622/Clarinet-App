const routes = {
  home: {
    title: 'Main Menu',
    render: () => {
      return `
        <section class="menu">
          <div class="card">
            <h2>Welcome to Clarinet App</h2>
            <p>This is a minimal static single-file app scaffold. Use the buttons above to navigate between the main menu and three other menus.</p>
          </div>
          <div class="card">
            <h3>Quick Actions</h3>
            <button id="demo-btn">Run Demo Action</button>
            <div id="demo-out" style="margin-top:8px;color:var(--muted)"></div>
          </div>
        </section>
      `;
    }
  },
  menu1: {
    title: 'Menu 1',
    render: () => `
      <section class="menu">
        <div class="card">
          <h2>Menu 1 - Exercises</h2>
          <p>Placeholder content for menu 1. Replace with real features like scales, exercises or lessons.</p>
        </div>
      </section>
    `
  },
  menu2: {
    title: 'Menu 2',
    render: () => `
      <section class="menu">
        <div class="card">
          <h2>Menu 2 - Sheet Music</h2>
          <p>Placeholder for sheet music viewer and playback controls.</p>
        </div>
      </section>
    `
  },
  menu3: {
    title: 'Menu 3',
    render: () => `
      <section class="menu">
        <div class="card">
          <h2>Menu 3 - Settings</h2>
          <p>App settings, preferences and profile info can go here.</p>
        </div>
      </section>
    `
  }
};

function setActiveButton(route){
  document.querySelectorAll('.nav-btn').forEach(b=>{
    b.classList.toggle('active', b.dataset.route===route);
  });
}

function navigate(route){
  const r = routes[route] || routes.home;
  document.title = `${r.title} - Clarinet App`;
  document.getElementById('main-content').innerHTML = r.render();
  setActiveButton(route);
  // attach simple demo action if on home
  const demoBtn = document.getElementById('demo-btn');
  if(demoBtn){
    demoBtn.addEventListener('click', ()=>{
      const out = document.getElementById('demo-out');
      out.textContent = 'Demo action ran at ' + new Date().toLocaleTimeString();
    });
  }
}

// wire nav buttons
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('.nav-btn').forEach(b=>{
    b.addEventListener('click', ()=>navigate(b.dataset.route));
  });
  navigate('home');
});
