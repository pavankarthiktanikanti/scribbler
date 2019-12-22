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

/*
    Modal for Getting Started Signup
    Input fields, Button to Submit and Font Awesome Times icon for closing the modal
*/
var gettingStartedModalMarkup = '<div id="gsModal" class="modal">' +
    '<!-- Modal content -->' +
    '<div class="modal-container">' +
    '<div class="modal-header-container">' +
    '<h4 class="modal-title" id="getStartedModalLabel">Get Started</h4>' +
    '<button type="button" class="close" onclick="dismissModal(gsModal)" aria-label="Close">' +
    '<span aria-hidden="true"><i class="fa fa-times" aria-hidden="true"></i></span>' +
    '</button>' +
    '<hr />' +
    '</div>' +
    '<div class="modal-body-div">' +
    '<form id="gsForm">' +
    '<div class="form-group">' +
    '<label for="gsInputName">Name</label>' +
    '<input type="text" class="modal-input" id="gsInputName" aria-describedby="gsNameHelp"' +
    'placeholder="Enter your name" required>' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="gsInputUserName">Username</label>' +
    '<input type="text" class="modal-input" id="gsInputUserName" aria-describedby="gsInputUserNameHelp"' +
    'placeholder="Enter your username" required>' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="gsInputPassword">Password</label>' +
    '<input type="password" class="modal-input" id="gsInputPassword" placeholder="Enter your password" required>' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="gsInputConfirmPassword">Confirm Password</label>' +
    '<input type="password" class="modal-input" id="gsInputConfirmPassword" placeholder="Re-enter your password"' +
    'required>' +
    '</div>' +
    '</form>' +
    '<button id="modalSignUpBtn" form="gsForm" class="modal-input-btn">Sign Up</button>' +
    '</div>' +
    '</div>' +
    '</div>';

/*
    Modal for Welcome Back Signin
    Input fields, Button to Submit and Font Awesome Times icon for closing the modal
    A Link at the Bottom which on clicked switches to Signup modal dismissing the current modal
*/
var welcomeBackModalMarkup = '<div id="wbModal" class="modal">' +
    '<div class="modal-container">' +
    '<div class="modal-header-container">' +
    '<h4 class="modal-title" id="wbModalLabel">Welcome Back!</h4>' +
    '<button type="button" class="close" onclick="dismissModal(wbModal)" aria-label="Close">' +
    '<span aria-hidden="true"><i class="fa fa-times" aria-hidden="true"></i></span>' +
    '</button>' +
    '<hr />' +
    '</div>' +
    '<div class="modal-body-div">' +
    '<form id="wbForm">' +
    '<div class="form-group">' +
    '<label for="wbInputUsername">Username</label>' +
    '<input type="text" class="modal-input" id="wbInputUsername" aria-describedby="wbInputUsernameHelp"' +
    'placeholder="Enter your username" required>' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="wbInputPassword">Password</label>' +
    '<input type="password" class="modal-input" id="wbInputPassword" placeholder="Enter your password" required>' +
    '</div>' +
    '</form>' +
    '<button id="modalSignInBtn" form="wbForm" class="modal-input-btn">Sign In</button>' +
    '</div>' +
    '<div class="modal-footer-container">' +
    '<span>Not a member? <a id="switchToSignUp">Sign Up</a></span>' +
    '</div>' +
    '</div>' +
    '</div>';

// Call the funtion to update the html of the header & Modals
populateHeaderAndModalContent();

/*
    Function to poppulate the header & modal content dynamically on the page once it is loaded
*/
function populateHeaderAndModalContent() {
    document.getElementById('headerContainer').innerHTML = headerContent;
    document.getElementById('gettingStartedModal').innerHTML = gettingStartedModalMarkup;
    document.getElementById('welcomeBackModal').innerHTML = welcomeBackModalMarkup;
}

var gsModal = document.getElementById('gsModal');
var wbModal = document.getElementById('wbModal');

/*
    Binding click event to show up getting started modal
*/
document.getElementById('getStartedSignUp').onclick = function () {
    gsModal.style.display = 'block';
}

/*
    Binding click event to show up welcome back modal
*/
document.getElementById('welcomeBackSignIn').onclick = function () {
    wbModal.style.display = 'block';
}

/*
    Binding click event to switch to getting started modal from welcome back modal
*/
document.getElementById('switchToSignUp').onclick = function () {
    wbModal.style.display = 'none';
    gsModal.style.display = 'block';
}

/*
    Dismiss/Close a selected modal
*/
function dismissModal(modalElement) {
    modalElement.style.display = 'none';
}

/*
    Event to bind any click out side the modal on the page to dismiss the modal
*/
window.onclick = function (event) {
    var allModals = document.getElementsByClassName("modal");
    if (allModals) {
        for (var index = 0; index < allModals.length; index++) {
            if (event.target == allModals[index]) {
                allModals[index].style.display = 'none';
            }
        }
    }
}
