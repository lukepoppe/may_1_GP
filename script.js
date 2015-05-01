var user = {};

function search() {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        crossDomain: true,
        url: "https://api.github.com/users/vincejones",
        complete: function () {
            console.log('ajax complete');
        },
        success: function (data) {
            searchCallback(data);
        }
    });
}


function searchCallback(results) {
    console.log(results.id);
    user = results;
    displayContent(user);
}
function displayContent(userData){
    $('.userPic').attr("src", user.avatar_url);
    $('.name').text(user.name);
    $('.location').text(user.location);
    $('.email').text(user.email);
}

$(document).ready(function() {

});
