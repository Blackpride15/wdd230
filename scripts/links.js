const baseURL = "https://blackpride15.github.io/wdd230/";
const linksURL = "https://blackpride15.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error("Error loading links:", error);
    }
}

function displayLinks(weeks) {
    const activityContainer = document.getElementById("learning-activities");

    weeks.forEach(week => {
        const weekSection = document.createElement("div");
        const weekTitle = document.createElement("h4");
        weekTitle.textContent = week.week;
        weekSection.appendChild(weekTitle);

        const ul = document.createElement("ul");

        week.links.forEach(link => {
            const li = document.createElement("li");
            const a = document.createElement("a");

            a.href = baseURL + link.url;
            a.textContent = link.title;
            a.target = "_blank";

            li.appendChild(a);
            ul.appendChild(li);
        });

        weekSection.appendChild(ul);
        activityContainer.appendChild(weekSection);
    });
}

// Call the function to fetch and display the links
getLinks();