
    function nextPage(input)
    {
        var testInput = input;
        
        if (input == "uri") {
            // Check input
            if (document.getElementById("txtClientId").value.trim().length == 0 || document.getElementById("txtClientId").value == null ) {

                setClientErrorMsg("The field ClientId is required");
                document.getElementById("txtClientId").focus();
            } else {

                $('[href="#' + input + '"]').tab('show');
                clearErrorMessage();
            }

        }
        else if (input == "secrets") {

            if ($('#listScopes').is(':empty')) {
                setClientErrorMsg("Please add at least one scope");
                document.getElementById("txtAllowedScopes").focus();
            } else
            {
                $('[href="#' + input + '"]').tab('show');
                clearErrorMessage();
            }

        } else if (input == "summary") {
            // Get details
            var tempClientID = document.getElementById("txtClientId").value;
            var tempClientName = document.getElementById("txtClientName").value;
            var tempClientDesc = document.getElementById("txtClientDescription").value;

            var tempClientStatus = "";

            if (document.getElementById("inputStatus").checked == true) {
                tempClientStatus = "Enabled";
            } else { tempClientStatus = "Disabled"; }

            var tempRedirectUri = document.getElementById("txtRedirectUri").value;
            var tempLogoutUri = document.getElementById("txtLogoutUri").value;


            var tempClientScopes = document.getElementById("listScopes");
            var strScope = "";

            for (var x = 0; x < tempClientScopes.options.length; x++) {
                strScope += tempClientScopes.options[x].text + ", "
            }
            document.getElementById("lblScopes").innerHTML = strScope.substring(0, strScope.length - 2);

            var tempClientSecrets = document.getElementById("listSecrets");
            var strSecret = "";
            for (var x = 0; x < tempClientSecrets.options.length; x++) {
                strSecret += tempClientSecrets.options[x].text + ", "

            }
            document.getElementById("lblSecrets").innerHTML = strSecret.substring(0, strSecret.length - 2);


            var tempClientClaims = document.getElementById("listClaims");
            var strClaim = "";
            for (var x = 0; x < tempClientClaims.options.length; x++) {
                strClaim += tempClientClaims.options[x].text + ", "

            }
            document.getElementById("lblClaims").innerHTML = strClaim.substring(0, strClaim.length - 2);

            var tempClientResources = document.getElementById("listAssRes");
            var strRes = "";
            for (var x = 0; x < tempClientResources.options.length; x++) {
                strRes += tempClientResources.options[x].text + ", "

            }
            document.getElementById("lblResources").innerHTML = strRes.substring(0, strRes.length - 2);

            // Append details on labels for display
            document.getElementById("lblClientID").innerHTML = tempClientID;
            document.getElementById("lblClientName").innerHTML = tempClientName;
            document.getElementById("lblClientDesc").innerHTML = tempClientDesc;
            document.getElementById("lblClientStatus").innerHTML = tempClientStatus;
            document.getElementById("lblRedirectUri").innerHTML = tempRedirectUri;
            document.getElementById("lblLogoutUri").innerHTML = tempLogoutUri;


            $('[href="#' + input + '"]').tab('show');
            clearErrorMessage();
        }
        else {

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
            setClientErrorMsg("Please enter scope");
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
            
            setClientErrorMsg("Please enter secret");
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
            
            setClientErrorMsg("Please enter claim");
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

    function clearClient()
    {
        document.getElementById("txtClientId").value = "";
        document.getElementById("txtClientName").value = "";
        document.getElementById("txtClientDescription").value = "";
        document.getElementById("inputStatus").checked = true;
    }

    function removeRes() {
        
        if (document.getElementById("listAssRes").selectedIndex == -1)
        {
            setClientErrorMsg("Please choose assigned resource to remove");


    } else {
            clearErrorMessage();
            // Get selected item from list box it
            var x = document.getElementById("listAssRes").selectedIndex;
            var y = document.getElementById("listAssRes").options;
            var itemValue = y[x].value;
            var itemText = y[x].text;

            // Add Selected Assigned To Available List
            var c = document.getElementById("listAvailRes");
            var toAvailList = document.createElement("option");
            toAvailList.value = itemValue;
            toAvailList.text = itemText;
            c.add(toAvailList);

            // Remove Selected From Assigned List listAvailRes
            var z = document.getElementById("listAssRes");
            z.remove(x);
        }

    }


    function addRes()
    { 
        if (document.getElementById("listAvailRes").selectedIndex == -1)
        {
            setClientErrorMsg("Please choose available resource to assign to this client");

    } else {
            clearErrorMessage();
            // Get selected item from list box it
            var x = document.getElementById("listAvailRes").selectedIndex;
            var y = document.getElementById("listAvailRes").options;
            var itemValue = y[x].value;
            var itemText = y[x].text;

            // Add Selected Assigned To Available List
            var c = document.getElementById("listAssRes");
            var toAvailList = document.createElement("option");
            toAvailList.value = itemValue;
            toAvailList.text = itemText;
            c.add(toAvailList);

            // Remove Selected From Assigned List listAssRes
            var z = document.getElementById("listAvailRes");
            z.remove(x);
        }
    }

    function clearErrorMessage()
    {
        $('#clientErrorMessage').hide();  
    }

    function setClientErrorMsg(error)
    {   
        document.getElementById("clientErrorMessage").innerHTML = "<a onclick='$(" + 'clientErrorMessage' + ").hide()' class='close' data-hide='alert' >&times;</a> " + error;
        $('#clientErrorMessage').show();  
    }
