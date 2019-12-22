/* On click of All Posts button, redirect to postslist page */
document.getElementById('allPostsBtn').addEventListener('click', function () {
    window.location.href = "./html/postslist.html";
});

var postModal = document.getElementById('postModal');
/* Bind event for Create Post button to show the modal Pen Your Post */
document.getElementById('createPostBtn').onclick = function () {
    postModal.style.display = 'block';
}
