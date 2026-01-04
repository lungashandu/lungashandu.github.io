document.addEventListener('DOMContentLoaded', () => {
    fetch('./profile.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('display_id').innerText = data.displayId;
            document.getElementById('title').innerHTML = `${data.firstName}<br>${data.lastName}`;
            document.getElementById('short_bio').innerText = data.shortBio;

            // Handle the three paragraphs for the modal
            const modalBody = document.getElementById('modal_bio');
            modalBody.innerHTML = ''; // Clear placeholder
            data.detailedBio.forEach(para => {
                const p = document.createElement('p');
                p.innerText = para;
                p.style.marginBottom = "15px"; // Adds spacing between paragraphs
                modalBody.appendChild(p);
            });

            // Social Links
            document.getElementById('link_github').href = data.socials.github;
            document.getElementById('link_linkedin').href = data.socials.linkedin;
            document.getElementById('link_twitter').href = data.socials.twitter;
        });

    // Modal Logic (from your index.js)
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("BTNmore");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = () => modal.style.display = "block";
    span.onclick = () => modal.style.display = "none";
    window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; };
});