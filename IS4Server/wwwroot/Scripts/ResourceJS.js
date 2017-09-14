
function nextPage(input) {
        
    if (input == "scopes") {
        // Check input
        if (document.getElementById("txtResName").value.trim().length == 0 || document.getElementById("txtResName").value == null)
        {
            setErrorMessage("The field Name is required");
            document.getElementById("txtResName").focus();
        } else
        {
            clearErrorMessage();
            $('[href="#' + input + '"]').tab('show');
        }

    } else if (input == "secrets") {

        if ($('#listScopes').is(':empty')) {
            setErrorMessage("Please add at least one scope");
            document.getElementById("txtAllowedScopes").focus();
        } else {
            $('[href="#' + input + '"]').tab('show');
            clearErrorMessage();
        }

    } else if (input == "summary") {
            // Get details
            var tempResName = document.getElementById("txtResName").value;
            var tempResDisp = document.getElementById("txtResDispName").value;
            var tempResDesc = document.getElementById("txtResDesc").value;

            var tempResStatus = "";

            if (document.getElementById("inputStatus").checked == true) {
                tempResStatus = "Enabled";
            } else { tempResStatus = "Disabled"; }

            var tempClientScopes = document.getElementById("listScopes");
            var strScope = "";

            for (var x = 0; x < tempClientScopes.options.length; x++) {
                strScope += tempClientScopes.options[x].text + ", "
            }
            document.getElementById("lblResScopes").innerHTML = strScope.substring(0, strScope.length - 2);

            var tempClientSecrets = document.getElementById("listSecrets");
            var strSecret = "";
            for (var x = 0; x < tempClientSecrets.options.length; x++) {
                strSecret += tempClientSecrets.options[x].text + ", "

            }
            document.getElementById("lblResSecrets").innerHTML = strSecret.substring(0, strSecret.length - 2);


            var tempClientClaims = document.getElementById("listClaims");
            var strClaim = "";
            for (var x = 0; x < tempClientClaims.options.length; x++) {
                strClaim += tempClientClaims.options[x].text + ", "

            }
            document.getElementById("lblResClaims").innerHTML = strClaim.substring(0, strClaim.length - 2);

            //// Append details on labels for display
            document.getElementById("lblResName").innerHTML = tempResName;
            document.getElementById("lblResDispName").innerHTML = tempResDisp;
            document.getElementById("lblResDescription").innerHTML = tempResDesc;
            document.getElementById("lblResStatus").innerHTML = tempResStatus;

            $('[href="#' + input + '"]').tab('show');
            clearErrorMessage();

    } else
    {
        $('[href="#' + input + '"]').tab('show');
        clearErrorMessage();
    }

    }

    //Add Scopes To Listbox
    function addScopesToList()
    {
        var inputScope = document.getElementById("txtAllowedScopes").value.trim();
        
        if (inputScope == null || inputScope == "" )
        {
            setErrorMessage("Please enter scope");
            document.getElementById("txtAllowedScopes").focus();

        } else {
            clearErrorMessage();
            var x = document.getElementById("listScopes");
            var option = document.createElement("option");
            option.value = inputScope;
            option.text = inputScope;
            x.add(option);

            document.getElementById("txtAllowedScopes").value = "";
            document.getElementById("txtAllowedScopes").focus();
        }
    }

    // Add Secrets To Listbox

    function addSecretsToList() {
        var inputSecret = document.getElementById("txtAllowedSecrets").value.trim();


        if (inputSecret == null || inputSecret == "") {
            
            setErrorMessage("Please enter secret");
            document.getElementById("txtAllowedSecrets").focus();

        } else {
            clearErrorMessage();
            var x = document.getElementById("listSecrets");
            var option = document.createElement("option");
            option.value = inputSecret;
            option.text = inputSecret;
            x.add(option);

            document.getElementById("txtAllowedSecrets").value = "";
            document.getElementById("txtAllowedSecrets").focus();
        }
    }

    // Add Claims To Listbox
    function addClaimsToList() {
        var inputClaim = document.getElementById("txtAllowedClaims").value.trim();


        if (inputClaim == null || inputClaim == "") {
            
            setErrorMessage("Please enter claim");
            document.getElementById("txtAllowedClaims").focus();

        } else {

            clearErrorMessage();
            var x = document.getElementById("listClaims");
            var option = document.createElement("option");
            option.value = inputClaim;
            option.text = inputClaim;
            x.add(option);

            document.getElementById("txtAllowedClaims").value = "";
            document.getElementById("txtAllowedClaims").focus();
        }
    }

    function clearResource()
    {
        document.getElementById("txtResName").value = "";
        document.getElementById("txtResDispName").value = "";
        document.getElementById("txtResDesc").value = "";
        document.getElementById("inputStatus").checked = true;
    }

    function clearErrorMessage() {
        $('#resourceErrorMessage').hide();
    }

    function setErrorMessage(error) {

        document.getElementById("resourceErrorMessage").innerHTML = "<a onclick='$(" + 'resourceErrorMessage' + ").hide()' class='close' data-hide='alert' >&times;</a> " + error;
        $('#resourceErrorMessage').show();        
    }

