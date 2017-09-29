    function clearResource()
    {
        $('#Name').val('');
        $('#DisplayName').val('');
        $('#Scope').val('');
        
    }

    function clearErrorMessage() {
        $('#resourceErrorMessage').hide();
    }

    function setErrorMessage(error) {

        document.getElementById("resourceErrorMessage").innerHTML = "<a onclick='$(" + 'resourceErrorMessage' + ").hide()' class='close' data-hide='alert' >&times;</a> " + error;
        $('#resourceErrorMessage').show();        
    }

function validateInput()
{
    var isValid = true;
    var errorMsg = "";
        
    if (document.getElementById("Name").value == "" || document.getElementById("Name").value == null)
    {
        isValid = false;
        errorMsg += "The field Name is required." + "<br />";
    }

    if (document.getElementById("DisplayName").value == "" || document.getElementById("DisplayName").value == null)
    {
        isValid = false;
        errorMsg += "The field Display Name is required." + "<br />";
    }

    if (document.getElementById("Scope").value == "" || document.getElementById("Scope").value == null)
    {
        isValid = false;
        errorMsg += "The field Scope is required." + "<br />";
    }

    if (isValid == false) {

        document.getElementById("resourceErrorMessage").innerHTML = "<a onclick='$(" + 'resourceErrorMessage' + ").hide()' class='close' data-hide='alert' >&times;</a> " + errorMsg;
        $('#resourceErrorMessage').show();
        return isValid;
    }
    else
    {
        return isValid;
    }
 
}