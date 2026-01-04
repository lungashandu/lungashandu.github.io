document.addEventListener('DOMContentLoaded', () => {
    // 1. Fetch data from profile.json
    fetch('./profile.json')
        .then(response => response.json())
        .then(data => {
            // Inject text data
            document.getElementById('display_id').innerText = data.displayId;
            document.getElementById('title').innerHTML = `${data.firstName}<br>${data.lastName}`;
            document.getElementById('short_bio').innerText = data.shortBio;
            document.getElementById('modal_bio').innerText = data.detailedBio;

            // Update social media links
            document.getElementById('link_github').href = data.socials.github;
            document.getElementById('link_linkedin').href = data.socials.linkedin;
            document.getElementById('link_instagram').href = data.socials.instagram;
            document.getElementById('link_twitter').href = data.socials.twitter;
        })
        .catch(error => console.error('Error loading profile data:', error));

    // 2. Existing Modal Logic
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("BTNmore");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});