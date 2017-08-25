// Form fields
var nameInput = document.getElementById("nameInput");
var mailInput = document.getElementById("mailInput");
var role = document.getElementById("role");
var description = document.getElementById("descriptionArea");
var engageForm = document.getElementById("engage-form");


// Database References
var formsubmitRef = defaultDatabase.ref('formsubmit/');

// defaultDatabase.ref(formsubmitRef).set({
//     fullname: nameInput.value,
//     email: mailInput.value,
//     role: role.value,
//     body: description.value
// });

// // for removing objects, can also update with "null"
// snippets.remove();
// // Updating db with a promise call, once. Can be done with on() too.
// formsubmitRef.once('value').then(function(snapshot) {
//     writeFormData(postElement, snapshot.val());
// });

//  FORM API
function writeFormData(name, email, role, description) {
    var d = new Date();
    var postData = {
        fullname: name.value,
        email: email.value,
        role: role.value,
        body: description.value,
        date: d.toDateString()
    };

    // Get formsubmit/ key
    var newFormsubmitKey = defaultDatabase.ref().child('formsubmit/').push().key;

    // Write the new formsubmit's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/formsubmit/' + newFormsubmitKey] = postData;
    //updates['/user-posts/' + uid + '/' + newPostKey] = postData;

    return defaultDatabase.ref().update(updates);
}


function writeNewPost(uid, username, picture, title, body) {
  // A post entry.
  var postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}
