

    function clearErrorMessage()
    {
        $('#clientErrorMessage').hide();  
    }

    function setClientErrorMsg(error)
    {   
        document.getElementById("clientErrorMessage").innerHTML = "<a onclick='$(" + 'clientErrorMessage' + ").hide()' class='close' data-hide='alert' >&times;</a> " + error;
        $('#clientErrorMessage').show();  
}

    function clearClient()
    {
        $('#ClientId').val('');
        $('#ClientName').val('');
        $('#ClientSecret').val('');
        $('#ClientScope').val('');
    }


    function validateClientInput() {
        var isValid = true;
        var errorMsg = "";

        if (document.getElementById("ClientId").value == "" || document.getElementById("ClientId").value == null) {
            isValid = false;
            errorMsg += "The field Client ID is required." + "<br />";
        }

        if (document.getElementById("ClientName").value == "" || document.getElementById("ClientName").value == null) {
            isValid = false;
            errorMsg += "The field Client Name is required." + "<br />";
        }

        if (document.getElementById("ClientSecret").value == "" || document.getElementById("ClientSecret").value == null) {
            isValid = false;
            errorMsg += "The field Client Secret is required." + "<br />";
        }

        if (document.getElementById("ClientScope").value == "" || document.getElementById("ClientScope").value == null) {
            isValid = false;
            errorMsg += "The field Client Scope is required." + "<br />";
        }

        if (isValid == false) {

            document.getElementById("clientErrorMessage").innerHTML = "<a onclick='$(" + 'clientErrorMessage' + ").hide()' class='close' data-hide='alert' >&times;</a> " + errorMsg;
            $('#clientErrorMessage').show();
            return isValid;
        }
        else {
            return isValid;
        }

    }