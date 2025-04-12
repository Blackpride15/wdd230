const membersContainer = document.getElementById("members");
const gridBtn = document.getElementById("grid-view");
const listBtn = document.getElementById("list-view");

async function fetchMembers() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    displayMembers(data.members);
}

function displayMembers(members) {
    membersContainer.innerHTML = ""; // Clear existing content
    members.forEach(member => {
        const card = document.createElement("section");
        card.classList.add("member-card");

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name} logo">
            <p>${member.name}</p>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">${member.website}</a></p>
            <p>${member.membership}</p>
            <p>${member.description}</p>
        `;

        membersContainer.appendChild(card);
    });
}

gridBtn.addEventListener("click", () => {
    membersContainer.classList.add("grid-view");
    membersContainer.classList.remove("list-view");
});

listBtn.addEventListener("click", () => {
    membersContainer.classList.add("list-view");
    membersContainer.classList.remove("grid-view");
});

fetchMembers();
