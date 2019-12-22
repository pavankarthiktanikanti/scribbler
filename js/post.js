toggleButtons();

/**
 * On click of Edit button, the title and content are made editabe
 */
document.getElementById('editPostButton').addEventListener('click', function () {
    // hide Edit button, show Save button
    toggleButtons();
    var postTitle = document.getElementById('postTitle');
    var postContent = document.getElementById('postContent');

    // Add edit-mode css dynamically to show pink border for title and content of thte post
    postTitle.classList.add('edit-mode');
    postContent.classList.add('edit-mode');

    // Making the title & content of post editable
    postTitle.contentEditable = postContent.contentEditable = true;
});

/** 
 * On click of Save button, show the modified title/content and remove pink border
 */
document.getElementById('savePostButton').addEventListener('click', function () {
    // hide Save button, show Edit button
    toggleButtons();
    var postTitle = document.getElementById('postTitle');
    var postContent = document.getElementById('postContent');

    // Remove the pink border css class for title and content of the post
    postTitle.classList.remove('edit-mode');
    postContent.classList.remove('edit-mode');

    postTitle.contentEditable = postContent.contentEditable = false;
});

/**
 *  Toggles between Save/Edit Buttons (Displays one button at a time)
 */
function toggleButtons() {
    if (document.getElementById('savePostButton').style.display !== 'none') {
        document.getElementById('savePostButton').style.display = 'none';
        document.getElementById('editPostButton').style.display = '';
    } else {
        document.getElementById('savePostButton').style.display = '';
        document.getElementById('editPostButton').style.display = 'none';

    }
}


var noOfLikes = 0;
/**
 * Like Button, when clicked updates the number of likes on the page
 */
function postLiked() {
    document.getElementById("likeButton").innerHTML = "<i class='fa fa-thumbs-up'></i> Liked!";
    noOfLikes++;
    if (noOfLikes === 1) {
        document.getElementById('likesCount').innerHTML = noOfLikes + " person likes this!";
    }
    else if (noOfLikes > 1) {
        document.getElementById('likesCount').innerHTML = noOfLikes + " people like this!";
    }
}

var comments = document.getElementById('listComments');
// When no comment is added, list of comments section won't be displayed
// just the background color with empty content will not be displayed
comments.style.display = 'none';

/**
 * Adds the comment added in the text box appending just under the comment box input
 * Latest displayed on the top
 * @param {*} id The id attribute of comment text box
 */
function addComments(id) {
    var userComments = id.value;
    // If no value is entered in text box, comments section will not get updated
    if (id.value !== '') {
        comments.style.display = '';
        comments.innerHTML = '<p>' + userComments + '</p>' + comments.innerHTML;
        // Clearing the comment box field after submitting the comment.
        id.value = id.defaultValue;
    }
}