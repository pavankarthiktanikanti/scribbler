/* 
    Reusable header Content with Logo and subheading on the left 
    and Sign in and Signup buttons on the right of the page
*/
var headerContent = '<div class="header">' +
    '<input id="welcomeBackSignIn" class="topButtons" type="button" value="Sign In">' +
    '<input id="getStartedSignUp" class="topButtons" type="button" value="Sign Up">' +
    '<span id="pageTitle" class="logo-title">ScriBBler</span>' +
    '<p class="middleText">Explore, Imagine, Create</p>' +
    '</div>';

// Call the funtion to update the html of the header
populateHeaderAndModalContent();

/*
    Function to poppulate the header content dynamically on the page once it is loaded
*/
function populateHeaderAndModalContent() {
    document.getElementById('headerContainer').innerHTML = headerContent;
}