const API_KEY = "68cc087e400e4656a93fd54920e848c5";

function getAccess() {
  window.open("https://cors-anywhere.herokuapp.com/", "_blank");
}

async function getStandings() {
  const competitionCode = document.getElementById("competitionSelect").value;
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const url = `${proxyUrl}https://api.football-data.org/v4/competitions/${competitionCode}/standings`;

  try {
    const response = await fetch(url, {
      headers: { "X-Auth-Token": API_KEY }
    });

    if (!response.ok) throw new Error("Failed to fetch standings");

    const data = await response.json();
    const standings = data.standings[0].table;

    let tableHTML = `
      <table>
        <tr>
          <th>Position</th>
          <th>Team</th>
          <th>Played</th>
          <th>Won</th>
          <th>Draw</th>
          <th>Lost</th>
          <th>Points</th>
        </tr>`;

    standings.forEach(team => {
      tableHTML += `
        <tr>
          <td>${team.position}</td>
          <td>${team.team.name}</td>
          <td>${team.playedGames}</td>
          <td>${team.won}</td>
          <td>${team.draw}</td>
          <td>${team.lost}</td>
          <td>${team.points}</td>
        </tr>`;
    });

    tableHTML += `</table>`;
    document.getElementById("tableContainer").innerHTML = tableHTML;

  } catch (error) {
    document.getElementById("tableContainer").innerHTML = `<p>Error: ${error.message}</p>`;
  }
}

function toggleDarkMode() {
  const body = document.body;
  const label = document.getElementById("modeLabel");
  const isDark = body.classList.toggle("dark-mode");
  label.textContent = isDark ? "Dark Mode" : "Light Mode";
  localStorage.setItem("darkMode", isDark);
  document.getElementById("darkModeToggle").checked = isDark;
}

window.onload = function () {
  const darkEnabled = localStorage.getItem("darkMode") === "true";
  if (darkEnabled) {
    document.body.classList.add("dark-mode");
    document.getElementById("darkModeToggle").checked = true;
    document.getElementById("modeLabel").textContent = "Dark Mode";
  } else {
    document.getElementById("modeLabel").textContent = "Light Mode";
  }
};
