function sleep(miliseconds) {
    var currentTime = new Date().getTime();
 
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}

// function initFB() {
//     // alert("lzl testing");
//     FB.init({
//         appId      : '555376054961251',
//         status     : true,
//         xfbml      : true,
//         version    : 'v3.2' // or v2.6, v2.5, v2.4, v2.3
//     });
//     logout();    
// }


// function fbLogin() {
//     FB.login(function(response) {
//         if (response.authResponse) {
//         console.log('Welcome!  Fetching your information.... ');
//         FB.api('/me', function(response) {
//         console.log('Good to see you, ' + response.name + '.');
//         });
//         } else {
//         console.log('User cancelled login or did not fully authorize.');
//         }
//     }, {scope: "email,first_name,last_name,gender,birthday",
//         return_scopes: true});
//     fillForm();
//     getLoginStatus();
//     alert("testing");
// }

function getLoginStatus() {
    // alert("get login status called");
    // logout();
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            var uid = response.authResponse.userID;
            var accessToken = response.authResponse.accessToken;
            // console.log(uid);
            // console.log(accessToken);
            console.log("you are connected to facebook");
            // fillForm();

        } else if (response.status === 'not_authorized') {
            console.log("not authorised buhuhu");
        } else {
            console.log("you are not logged in to facebook");
        }
    });
}



function fillForm() {

    FB.api("/me", {fields: "first_name,last_name,email,birthday,gender"}, function(response) {
        
        if (document.getElementById("firstname").value.length < 1) document.getElementById("firstname").value = response.first_name;
        if (document.getElementById("lastname").value.length < 1) document.getElementById("lastname").value = response.last_name;
        if (document.getElementById("email").value.length < 1 ) document.getElementById("email").value = response.email;
        if (document.getElementById("email").value == "undefined" ) document.getElementById("email").value = "";
        if (document.getElementById("birthday").value.length < 1) document.getElementById("birthday").value = "24/12/1996";
        document.getElementById("maleRadioButton").checked = "checked";
        // document.getElementById("address").value = "25A zuo lin road";
        // document.getElementById("postal_code").value = "123456";
    });

}

function checkfill() {
    FB.getLoginStatus(function(response) {
        // getLoginStatus();
        if (response.status === 'connected') {
            fillForm();
            console.log("logged in");
        } else {
            console.log("not connected oops");
        }
    });
}


function fbLogoutUser() {
    FB.getLoginStatus(function(response) {
        if (response && response.status === 'connected') {
            FB.logout(function(response) {
                document.location.reload();
            });
        }
    });
}