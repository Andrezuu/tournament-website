document.addEventListener('click', async function(event) {
    if (event.target && event.target.id === 'agregarParticipanteBtn') {
        const participantName = document.getElementById('participantName').value;
        const participantSkill = document.getElementById('participantSkill').value;

        try {
            const response = await fetch('/createTournament/addParticipant', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded' // Sending data as HTML
                },
                body: `name=${encodeURIComponent(participantName)}&skill=${encodeURIComponent(participantSkill)}`
            });

            if (response.ok) {
                const data = await response.text(); // Expecting HTML response
                console.log(data); // Logging the response from the server
            } else {
                console.error('Failed to add participant');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
});
