const spotlightContainer = document.querySelector(".spotlight");

// 1. Fetch the member data
fetch("data/members.json")
    .then(response => response.json())
    .then(data => {
        const members = data.members;

        // 2. Filter only 'Silver' or 'Gold' members
        const eligibleMembers = members.filter(member =>
            member.membership === "Silver" || member.membership === "Gold"
        );

        // 3. Shuffle the eligible members
        const shuffled = eligibleMembers.sort(() => 0.5 - Math.random());

        // 4. Pick 2 or 3 randomly
        const spotlightCount = Math.floor(Math.random() * 2) + 2; // 2 or 3
        const selected = shuffled.slice(0, spotlightCount);

        // 5. Display each selected member
        selected.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("spotlight-card");

            card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p><a href="${member.website}" target="_blank">${member.website}</a></p>
      `;

            spotlightContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.error("Error fetching member data:", error);
    });