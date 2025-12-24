let allTeams = [];
let currentTeams = [];
let chartInstance = null;

/* ---------------- DARK MODE ---------------- */
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
  
    document.getElementById("modeLabel").textContent = isDark ? "Dark Mode" : "Light Mode";
    localStorage.setItem("darkMode", isDark);
  
    if (chartInstance && currentTeams.length > 0) {
      renderChart(currentTeams);
    }
  }
  

window.onload = () => {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
    document.getElementById("darkToggle").checked = true;
    document.getElementById("modeLabel").textContent = "Dark Mode";
  }
};

/* ---------------- FETCH ---------------- */
async function getStandings() {
    const league = document.getElementById("competitionSelect").value;
    const container = document.getElementById("tableContainer");
    const chartSection = document.getElementById("chartSection");
  
    try {
      container.innerHTML = "Loading...";
      chartSection.classList.add("hidden"); 
  
      const res = await fetch(`https://football-standings-using-api.onrender.com/standings/${league}`);
      const data = await res.json();
  
      allTeams = data.standings[0].table;
      currentTeams = [...allTeams];
  
      sortTeams();
      renderChart(allTeams);
  
      chartSection.classList.remove("hidden"); 
  
    } catch (e) {
      container.innerHTML = "❌ Error loading data";
      chartSection.classList.add("hidden"); 
      console.error(e);
    }
}
    
/* ---------------- TABLE ---------------- */
function renderTable(teams) {
  let html = `
    <table>
      <tr>
        <th>Pos</th><th>Club</th><th>P</th><th>W</th>
        <th>D</th><th>L</th><th>Pts</th>
      </tr>
  `;

  teams.forEach(t => {
    html += `
      <tr>
        <td>${t.position}</td>
        <td class="team-cell">
          <img src="${t.team.crest}" />
          ${t.team.name}
        </td>
        <td>${t.playedGames}</td>
        <td>${t.won}</td>
        <td>${t.draw}</td>
        <td>${t.lost}</td>
        <td><b>${t.points}</b></td>
      </tr>
    `;
  });

  html += "</table>";
  document.getElementById("tableContainer").innerHTML = html;
}

/* ---------------- SEARCH + SORT ---------------- */
function filterTeams() {
    const q = document.getElementById("searchInput").value.toLowerCase();
    const chartSection = document.getElementById("chartSection");
  
    currentTeams = allTeams.filter(t =>
      t.team.name.toLowerCase().includes(q)
    );
  
    sortTeams();
  
    
    if (currentTeams.length === 0) {
      chartSection.classList.add("hidden");
    } else {
      chartSection.classList.remove("hidden");
      renderChart(currentTeams);
    }
  }
  

function sortTeams() {
  const sort = document.getElementById("sortSelect").value;
  let sorted = [...currentTeams];

  if (sort === "points") sorted.sort((a,b)=>b.points-a.points);
  if (sort === "wins") sorted.sort((a,b)=>b.won-a.won);
  if (sort === "losses") sorted.sort((a,b)=>b.lost-a.lost);
  if (sort === "name") sorted.sort((a,b)=>a.team.name.localeCompare(b.team.name));

  renderTable(sorted);
}

/* ---------------- CHART ---------------- */
function renderChart(teams) {
    const canvas = document.getElementById("pointsChart");
canvas.style.height = "100%";
canvas.style.width = "100%";

    const isDark = document.body.classList.contains("dark-mode");
  
    const top5 = [...teams]
      .sort((a, b) => b.points - a.points)
      .slice(0, 5);
  
    const ctx = document.getElementById("pointsChart");
  
    if (chartInstance) chartInstance.destroy();
  
    chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: top5.map(t => t.team.name),
        datasets: [{
          label: "Points",
          data: top5.map(t => t.points),
          backgroundColor: isDark ? "#4cc9f0" : "#0077b6",
          borderRadius: 10
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
  
        scales: {
          x: {
            ticks: {
              color: isDark ? "#f1f1f1" : "#222",   
              font: {
                size: 13,
                weight: "600"
              }
            },
            grid: {
              color: isDark
                ? "rgba(255,255,255,0.18)"
                : "rgba(0,0,0,0.1)"
            }
          },
          y: {
            ticks: {
              color: isDark ? "#f1f1f1" : "#222",  
              font: {
                size: 13,
                weight: "600"
              }
            },
            grid: {
              color: isDark
                ? "rgba(255,255,255,0.18)"
                : "rgba(0,0,0,0.1)"
            }
          }
        },
  
        plugins: {
          legend: {
            labels: {
              color: isDark ? "#f1f1f1" : "#222"
            }
          },
          title: {
            display: true,
            text: "Top 5 Teams – Points Comparison",
            color: isDark ? "#f1f1f1" : "#222",
            font: {
              size: 16,
              weight: "bold"
            }
          }
        }
      }
    });
}