// JavaScript function to toggle "Read More" sections
function toggleReadMore(postId) {
    var readMoreSection = document.getElementById('readMore-' + postId);
    var readMoreButton = document.getElementById('readMoreButton-' + postId);

    if (readMoreSection.style.display === 'none' || readMoreSection.style.display === '') {
        readMoreSection.style.display = 'block';
        readMoreButton.textContent = 'Read Less';
    } else {
        readMoreSection.style.display = 'none';
        readMoreButton.textContent = 'Read More';
    }
}
