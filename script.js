document.addEventListener('DOMContentLoaded', () => {
    // Array of vibrant, premium colors
    const vibrantColors = [
        '#ff4757', '#2ed573', '#ffa502', '#1e90ff',
        '#ff69b4', '#9b59b6', '#00cec9', '#eccc68'
    ];

    // Pick a random color for the main logo
    const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];

    // Apply color directly to the inline SVG group via color property
    const iconGroup = document.getElementById('icon-group');
    if (iconGroup) {
        iconGroup.style.color = randomColor;
    }

    // --- Bubble Phases Logic ---
    const bubblePhases = [
        // Short
        "...", "!", "?", "Sup!", "GG", "Nice!", "Hi!", "Bye!", "Yoooo!", "Wassup!", "Hello!",
        "Lol", "Bruh", "W", "Ayo!", "Huh?", "Nah", "Bet!", "Fr fr", "Oof", "Sheesh!",
        // Medium
        "Wanna play?", "Good Game!", "Let's goooo!", "No way!", "That's crazy!",
        "I'm so lost rn", "Wait what??", "Join us!", "You're cracked!", "Trust me bro",
        "This is fire!", "Say less!", "On god!", "My bad lol", "Hold on...",
        "Not again ", "Bro stop ", "I can't ", "Lowkey goated", "Highkey bussin",
        // Longer
        "Yo who built this room??", "Bro this game is so fun!",
        "Anyone wanna run some games?", "I've been here for 3 hours lol",
        "This reminds me of the old days", "Rec School is the future fr",
        "Can someone help me build this?", "Why is my avatar so goofy ",
        "Just vibing in the lobby rn", "Who wants to do a quest with me?",
        "I miss the classic Rec Room days", "This community is actually so cool",
        "Somebody come look at my room!", "How do I get to the paintball arena?",
        "We need more people for this game!", "This site was made by Ryan. ",
        "I just made the coolest room ever", "Wait how do you do that emote??",
        "Let's all meet at the hangout spot", "This update is actually insane!",
    ];

    const cubes = document.querySelectorAll('.cube');

    function updateBubbles() {
        cubes.forEach(cube => {
            const bubble = cube.querySelector('.bubble');
            if (!bubble) return;

            // 40% chance for a character to talk
            if (Math.random() > 0.6) {
                cube.classList.add('talking');

                // Randomize tail direction
                if (Math.random() > 0.5) {
                    cube.classList.add('right');
                } else {
                    cube.classList.remove('right');
                }

                // Pick a random phrase
                const randomPhase = bubblePhases[Math.floor(Math.random() * bubblePhases.length)];
                bubble.innerText = randomPhase;
            } else {
                cube.classList.remove('talking');
            }
        });
    }

    // Update bubbles every 4 seconds
    setInterval(updateBubbles, 4000);
    updateBubbles(); // initial call

    // --- Counter Animation ---
    const registeredPlayersElement = document.getElementById('registered-players-count');
    if (registeredPlayersElement) {
        let currentCount = 0;
        const targetCount = 0; // Simulated player count
        const duration = 2500; // 2.5 seconds
        const interval = 30; // update every 30ms
        const step = targetCount / (duration / interval);

        const counterInterval = setInterval(() => {
            currentCount += step;
            if (currentCount >= targetCount) {
                currentCount = targetCount;
                clearInterval(counterInterval);
            }
            registeredPlayersElement.innerText = Math.floor(currentCount).toLocaleString();
        }, interval);
    }
});
