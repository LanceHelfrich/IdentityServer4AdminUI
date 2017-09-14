

function validateUserInput() {

    var valid = true;
    var errorMsg = "";

    if (document.getElementById("txtUserName").value.trim().length == 0 || document.getElementById("txtUserName").value == null) {

        errorMsg += "The field User Name is required." + "<br />";
        valid = false;
    }

    if (document.getElementById("txtFullName").value.trim().length == 0 || document.getElementById("txtFullName").value == null) {

        errorMsg += "The field Full Name is required." + "<br />";
        valid = false;
    }

    if (document.getElementById("txtEmail").value.trim().length == 0 || document.getElementById("txtEmail").value == null) {

        errorMsg += "The field Email is required." + "<br />";
        valid = false;
    } else
    {
        //var re = /\S+@\S+\.\S+/;
        //if (re.test(document.getElementById("txtEmail").value))
        //{
        //    errorMsg += "Invalid Email entered." + "<br />";
        //    valid = false;
        //}
    }

    if (document.getElementById("txtPassword").value == null) {

        errorMsg += "The field Password is required." + " <br />";
        valid = false;
    }

    if (valid == false) {
        document.getElementById("userErrorMessage").innerHTML = "<a onclick='$(" + 'userErrorMessage' + ").hide()' class='close' data-hide='alert' >&times;</a> " + errorMsg;
        $('#userErrorMessage').show();

        return false;

    } else {
        return true;
    }

}


function clearUser() {
    document.getElementById("txtUserName").value = "";
    document.getElementById("txtFullName").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtPassword").value = "";
}