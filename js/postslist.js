// Store all posts content to dynaamically Populate on the page
var allPosts = [{
    author: "Srishti Gupta",
    postTitle: "&lsquo;let&rsquo; me be a &lsquo;const&rsquo;(ant), not a &lsquo;var&rsquo;(iable)!",
    postContent: "Since JavaScript does not have any type-checking, either of these keywords can be used to declare a" +
        "variable of any type (datatype) in JavaScript. Though all the three keywords are used for the same" +
        "purpose, they are different."
},
{
    author: "Colby Fayock",
    postTitle: "What is linting and how can it save you time?",
    postContent: "One of the biggest challenges in software development is time. It&rsquo;s something we can&rsquo;t easily get" +
        "more of, but linting can help us make the most out of the time we have."
},
{
    author: "Yazeed Bzadough",
    postTitle: "How to Get More Views on Your Tech Blog",
    postContent: "If you're a developer with a Twitter account, you've already seen everyone and their cat start a" +
        "blog, YouTube channel, or Patreon. We all want to become stars, or at the very least, a recognizable" +
        "name in the industry."
},
{
    author: "Cedd Burge",
    postTitle: "How to write easily describable code",
    postContent: "When code is not describable using words, most people have to do some mental mapping to turn it in to" +
        "words. This wastes mental energy, and you run the risk of getting the mapping wrong. Different" +
        "people will map to different words, which" +
        "leads to confusion when discussing the code."
},
{
    author: "Srishti Gupta",
    postTitle: "Everything you should know about &lsquo;module&rsquo; & &lsquo;require&rsquo; in Node.js",
    postContent: "Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing" +
        "some code and this file is named xyz.js, then this file is treated as a module in Node, and you can" +
        "say that you&rsquo;ve created a module" +
        "named xyz."
}];

loadPosts();

/* Build the Post Cards with the content and display on page load */
function loadPosts() {
    var postsMarkup = '';
    var postsContainer = document.getElementById('container');
    allPosts.forEach(function (post, index) {
        var template = "<div id='post" + index + "' class='post-container'>" +
            "<div class='author'>" +
            "<p>" + post.author + "</p>" +
            "</div>" +
            "<div class='content'>" +
            "<div>" +
            "<p class='content-title'>" + post.postTitle + "</p>" +
            "<span>" +
            "<!-- Include Font Awesome icon for delete icon -->" +
            "<i class='fa fa-trash trash-icon' aria-hidden='true' onclick=showModal('post" + index + "')></i>" +
            "</span>" +
            "</div>" +
            "<p class='content-text'>" + post.postContent + "</p>" +
            "<span>" +
            "<!-- Include Font Awesome icon for horizontal ellipsis icon -->" +
            "<i class='fa fa-ellipsis-h ellipsis-icon' aria-hidden='true' onclick='navigateToEditPost()'></i>" +
            "</span>" +
            "</div>" +
            "</div>";
        postsContainer.innerHTML += template;
    });
}

/* Navigate to post page on click of ellipsis icon */
function navigateToEditPost() {
    window.location.href = "./post.html";
}


var modal = document.getElementById("cofirmationModal");
var selectedPostId = '';

/* function to display the modal and store the selected post id */
function showModal(id) {
    modal.style.display = "block";
    selectedPostId = id;
}

var modalYesBtn = document.getElementById('modalYesBtn');
var modalNoBtn = document.getElementById('modalNoBtn');

/* On click of Yes button on modal, delete the selected post card and dismiss the modal */
modalYesBtn.onclick = function () {
    deleteContainer();
    modal.style.display = "none";
}

/* On click of No button on modal, clear the selected post id and dismiss the modal */
modalNoBtn.onclick = function () {
    modal.style.display = "none";
    selectedPostId = '';
}

/*
    Removes/Hides the post card which is selected on the Page to delete using Trash icon
    and clicking Yes on the confirmation modal
*/
function deleteContainer() {
    if (selectedPostId !== '') {
        document.getElementById(selectedPostId).style.display = 'none';
    }
}