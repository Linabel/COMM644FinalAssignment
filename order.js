function phoneFormat(input){
        // Strip all characters from the input except digits
        input = input.replace(/\D/g,'');

        // Trim the remaining input to ten characters, to preserve phone number format
        input = input.substring(0,10);

        // Based upon the length of the string, we add formatting as necessary
        var size = input.length;
        if(size > 6){
                input = input.substring(0,3)+"-"+input.substring(3,6)+"-"+input.substring(6, 10);
        }else if(size > 3){
                input = input.substring(0,3)+'-'+input.substring(3, 6);
        }else{
                input = input;
        }
        return input; 
}


function isDeliveryFormValid() {
    formValid = true;

    validations = {
        "inputName": "name-error",
        "inputPhone": "phone-error",
        "inputEmail": "email-error",
        "inputState": "state-error",
        "inputZip": "zip-error",
        "inputAddress": "addr-error",
        "inputCity": "city-error"
    }

    regularExpressions = {
        "inputName": /^[a-zA-Z]+$/,
        "inputPhone": /^\d{3}-\d{3}-\d{4}$/,
        "inputEmail": /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "inputState": /^[A-Z]{2}$/,
        "inputZip": /^[0-9]{5}(?:-[0-9]{4})?$/
    }

    errors = {
        "inputName": "Name should contain only letters",
        "inputPhone": "Phone number should contain only numbers",
        "inputEmail": "Please enter valid email address",
        "inputState": "Please enter two letter state code. Ex. CA",
        "inputZip": "Please enter valid zip",
        "inputAddress": "Please enter valid address",
        "inputCity": "Please enter valid city"
    }

    for (var key in validations){
        element = document.getElementById(key);
        errElement = document.getElementById(validations[key]);

        reValidation = true;

        if(key in regularExpressions) {
            reValidation = regularExpressions[key].test(element.value);
        }

        if(!reValidation || !element.value) {
            formValid = false;
            errElement.innerHTML = errors[key];
        } else {
            errElement.innerHTML = "";
        }
    }

    return formValid;
}

function addDeliveryFieldValidations() {
    // Validations
     validations = {
        "inputName": "name-error",
        "inputPhone": "phone-error",
        "inputEmail": "email-error",
        "inputState": "state-error",
        "inputZip": "zip-error",
        "inputAddress": "addr-error",
        "inputCity": "city-error"
    }

    regularExpressions = {
        "inputName": /^[a-zA-Z]+$/,
        "inputPhone": /^\d{3}-\d{3}-\d{4}$/,
        "inputEmail": /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "inputState": /^[A-Z]{2}$/,
        "inputZip": /^[0-9]{5}(?:-[0-9]{4})?$/
    }

    errors = {
        "inputName": "Name should contain only letters",
        "inputPhone": "Phone number should contain only numbers",
        "inputEmail": "Please enter valid email address",
        "inputState": "Please enter two letter state code. Ex. CA",
        "inputZip": "Please enter valid zip",
        "inputAddress": "Please enter valid address",
        "inputCity": "Please enter valid city"
    }

    function showError(errDivId, errMsg, regExp) {
        errDiv = document.getElementById(errDivId);
        reValidation = true;

        if(regExp) {
            reValidation = regExp.test(this.value);
        }


        if(!reValidation || !this.value) {
            errDiv.innerHTML = errMsg;
        } else {
            errDiv.innerHTML = "";
        }
    }

    for (var key in validations){
        element = document.getElementById(key);
        element.onchange = showError.bind(element, validations[key], errors[key], regularExpressions[key]); 
    }
}

function isBillingFormValid() {
    formValid = true;

    validations = {
        "inputName2": "name-error-2",
        "inputPhone2": "phone-error-2",
        "inputEmail2": "email-error-2",
        "inputState2": "state-error-2",
        "inputZip2": "zip-error-2",
        "inputAddress2": "addr-error-2",
        "inputCity2": "city-error-2"
    }

    regularExpressions = {
        "inputName2": /^[a-zA-Z]+$/,
        "inputPhone2": /^\d{3}-\d{3}-\d{4}$/,
        "inputEmail2": /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "inputState2": /^[A-Z]{2}$/,
        "inputZip2": /^[0-9]{5}(?:-[0-9]{4})?$/
    }

    errors = {
        "inputName2": "Name should contain only letters",
        "inputPhone2": "Phone number should contain only numbers",
        "inputEmail2": "Please enter valid email address",
        "inputState2": "Please enter two letter state code. Ex. CA",
        "inputZip2": "Please enter valid zip",
        "inputAddress2": "Please enter valid address",
        "inputCity2": "Please enter valid city"
    }

    for (var key in validations){
        element = document.getElementById(key);
        errElement = document.getElementById(validations[key]);

        reValidation = true;

        if(key in regularExpressions) {
            reValidation = regularExpressions[key].test(element.value);
        }

        if(!reValidation || !element.value) {
            formValid = false;
            errElement.innerHTML = errors[key];
        } else {
            errElement.innerHTML = "";
        }
    }

    return formValid;
}

function addBillingFieldValidations() {
    // Validations
     validations = {
        "inputName2": "name-error-2",
        "inputPhone2": "phone-error-2",
        "inputEmail2": "email-error-2",
        "inputState2": "state-error-2",
        "inputZip2": "zip-error-2",
        "inputAddress2": "addr-error-2",
        "inputCity2": "city-error-2"
    }

    regularExpressions = {
        "inputName2": /^[a-zA-Z]+$/,
        "inputPhone2": /^\d{3}-\d{3}-\d{4}$/,
        "inputEmail2": /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "inputState2": /^[A-Z]{2}$/,
        "inputZip2": /^[0-9]{5}(?:-[0-9]{4})?$/
    }

    errors = {
        "inputName2": "Name should contain only letters",
        "inputPhone2": "Phone number should contain only numbers",
        "inputEmail2": "Please enter valid email address",
        "inputState2": "Please enter two letter state code. Ex. CA",
        "inputZip2": "Please enter valid zip",
        "inputAddress2": "Please enter valid address",
        "inputCity2": "Please enter valid city"
    }

    function showError(errDivId, errMsg, regExp) {
        errDiv = document.getElementById(errDivId);
        reValidation = true;


        if(regExp) {
            reValidation = regExp.test(this.value);
        }


        if(!reValidation || !this.value) {
            errDiv.innerHTML = errMsg;
        } else {
            errDiv.innerHTML = "";
        }
    }

    for (var key in validations){
        element = document.getElementById(key);
        element.onchange = showError.bind(element, validations[key], errors[key], regularExpressions[key]); 
    }
}

function checkLuhnFormula(cardNumber, checksum) {
    digits = cardNumber.split('');
    digits.reverse();
    digits = digits.map(function(t){return parseInt(t)});

    for(var i=0; i<digits.length; i++){
        if(i%2 != 0){
            digits[i] = digits[i]*2;
        }
    }

    newDigits = digits.join('');
    newDigits = newDigits.split('');
    newDigits = newDigits.map(function(t){return parseInt(t)});

    sum = newDigits.reduce(function(acc, val) { return acc + val; });
    if(sum%checksum == 0) {
        return true
    } else {
        return false;
    }
}

function validateCard(cardNumber) {
    if(parseInt(cardNumber[0]) == 4) {
        if(cardNumber.length != 13 && cardNumber.length != 16) {
            return false;
        }

    } else if (parseInt(cardNumber.slice(0,2)) in [51, 52, 53, 54, 55]) {
        if(cardNumber.length != 16) {
            return false;
        }

    } else if (parseInt(cardNumber.slice(0,2)) == 37) {
        if(cardNumber.length != 15) {
            return false;
        }
    }

    if(!checkLuhnFormula(cardNumber, 10)){
        return false;
    }

    return true;
}

function validateExpiration() {
    month = document.getElementById("expr-month").value;
    year = document.getElementById("expr-year").value;
    currentTime = new Date();

    yearErr = document.getElementById("year-error");
    monthErr = document.getElementById("month-error");

    if(year < currentTime.getFullYear()){
        yearErr.innerHTML = "Please choose valid year";
    }

    if(year == currentTime.getFullYear() && month < currentTime.getMonth() + 1){
        monthErr.innerHTML = "Please choose valid month";
    } else {
        yearErr.innerHTML = "";
        monthErr.innerHTML = "";
    }
}

function addCardValidation() {
    cardElement = document.getElementById("cardNumber");
    cvcElement = document.getElementById("cvcNumber");
    monthElement = document.getElementById("expr-month");
    monthElement.selectedIndex = -1;
    yearElement = document.getElementById("expr-year");
    yearElement.selectedIndex = -1;

    monthElement.onchange = validateExpiration;
    yearElement.onchange = validateExpiration;
    cvcElement.onchange = function() {
        cvcErr = document.getElementById("cvc-error");
        if(!/^[0-9]{3}$/.test(this.value) || !this.value){
            cvcErr.innerHTML = "Please enter valid CVC";
        } else {
            cvcErr.innerHTML = "";
        }
    }

    cardElement.onchange = function() {
        cardErr = document.getElementById("card-error");
        if(!validateCard(this.value) || !this.value){
            cardErr.innerHTML = "Please enter valid card number";
        } else {
            cardErr.innerHTML = "";
        }
    }
}

function ready(){
    addDeliveryFieldValidations();
    addBillingFieldValidations();
    addCardValidation();

    popupCancelButton = document.getElementById("cancel");
    popupCancelButton.onclick = function() {
        var element = document.getElementById("popup");
        element.classList.add("hidden");
    }

    placeOrderButton = document.getElementById("place-order");
    placeOrderButton.onclick = function() {
        var popup = document.getElementById("popup");
        var buildForm = document.getElementById("build-pizza");
        var billingForm = document.getElementById("billing-info");
        var finishedButton = document.getElementById("finished");
        buildForm.disabled = true;
        billingForm.classList.remove("hidden");
        popup.classList.add("hidden");
        finishedButton.classList.add("hidden");
    }

    continueButton = document.getElementById("continue");
    continueButton.onclick = function() {
        if(isDeliveryFormValid()) {
            var element = document.getElementById("build-pizza");
            var deliveryForm = document.getElementById("delivery-info");
            var continueBtn = document.getElementById("continue");
            element.classList.remove("hidden");
            continueBtn.classList.add("hidden");
            deliveryForm.disabled = true;
        }
    }


    finishedButton = document.getElementById("finished");
    finishedButton.onclick = function() {
        var element = document.getElementById("popup");
        element.classList.remove("hidden");
    }


    addrTypeOptions = document.getElementById("inputAddressType");
    addrTypeOptions.onchange = function() {
        if (this.value == "other") {
            var element = document.getElementById("inputOtherAddrType");
            element.classList.remove("hidden");
        } else{
            var element = document.getElementById("inputOtherAddrType");
            element.classList.add("hidden");
        }
    }

	phoneInput = document.getElementById("inputPhone");
	phoneInput.onkeyup = function() {
        formattedValue = phoneFormat(this.value);
        this.value = formattedValue;
    }

    baseOptions = document.forms["info-form"].elements["inputPizzaBase"];
    for(var i = 0, max = baseOptions.length; i < max; i++) {
        baseOptions[i].onclick = function() {
            var priceOptions = {
                "handTossed": {
                    "Small": "9.99",
                    "Medium": "12.99",
                    "Large": "14.99",
                },
                "thinCrust": {
                    "Medium": "11.99",
                    "Large": "13.99"
                },
                "newYorkStyle": {
                    "Large": "16.99",
                    "Extra Large": "19.99"
                },
                "glutenFree": {
                    "Small": "10.99"
                }
            };
            sizeSelectElement = document.getElementById("inputPizzaSize");
            sizeSelectElement.innerHTML = '';

            prices = priceOptions[this.value];

            for (var key in prices){
                var option = document.createElement("option");
                option.text = key + " (" + prices[key] + "$)";
                option.setAttribute("price", prices[key]);
                sizeSelectElement.add(option);
            }
            sizeSelectElement.selectedIndex=-1;
            var element = document.getElementById("sizeOptions");
            element.classList.remove("hidden");
        }
    }

    function replaceItemList(itemList) {
        itemListElement = document.getElementById("itemList");
        items = []
        itemListElement.innerHTML="";
        for(var i=0; i<itemList.length; i++) {
            var iDiv = document.createElement('div');
            iDiv.innerText = itemList[i];
            itemListElement.appendChild(iDiv);
        }
        //itemList.append.apply(this, items);
    }


    function updateTotalCost() {
        itemList = [];
        total = 0.00;
        sizeOptions = document.forms["info-form"].elements["inputPizzaSize"];
        sizePrice = parseFloat(sizeOptions[sizeOptions.selectedIndex].getAttribute("price"));
        itemList.push(sizeOptions.value);

        cheeseOptions = document.forms["info-form"].elements["inputCheese"];
        cheesePrice = parseFloat(cheeseOptions[cheeseOptions.selectedIndex].getAttribute("price"));
        if(cheesePrice > 0.0) {
            itemList.push(cheeseOptions.value);
        }

        sauceOptions = document.forms["info-form"].elements["inputSauce"];
        saucePrice = parseFloat(sauceOptions[sauceOptions.selectedIndex].getAttribute("price"));
        if(saucePrice>0.0) {
            itemList.push(sauceOptions.value);
        }

        toppingCount = 0;

        toppingsInput = document.forms["info-form"].elements["inputToppings"];
        for(var i=0; i<toppingsInput.length; i++) {
            if(toppingsInput[i].checked) {
                itemList.push(toppingsInput[i].value + " (0.99$)");
                toppingCount = toppingCount + 1;
            }
        }

        total = sizePrice + cheesePrice + saucePrice + (0.99*toppingCount);
        document.getElementById("totalPrice").innerHTML = total.toFixed(2);
        replaceItemList(itemList);
    }

    sizeOptions = document.forms["info-form"].elements["inputPizzaSize"];
    sizeOptions.onchange = function() {
        var element = document.getElementById("furtherOptions");
        element.classList.remove("hidden");

        var finishedButton = document.getElementById("finished");
        finishedButton.classList.remove("hidden");
        updateTotalCost();
    }

    cheeseOptions = document.forms["info-form"].elements["inputCheese"];
    cheeseOptions.onchange = function() {
        updateTotalCost();
    }

    sauceOptions = document.forms["info-form"].elements["inputSauce"];
    sauceOptions.onchange = function() {
        updateTotalCost();
    }

    toppingsOptions = document.forms["info-form"].elements["inputToppings"];
    for(var i=0; i<toppingsOptions.length; i++) {
        toppingsOptions[i].onclick = function() {
            updateTotalCost();
        }
    }


    sameAsDeliveryCheck = document.getElementById("sameAsDelivery");
    sameAsDeliveryCheck.onclick = function() {
        fieldList = {
            "inputName": "inputName2",
            "inputPhone": "inputPhone2",
            "inputEmail": "inputEmail2",
            "inputState": "inputState2",
            "inputZip": "inputZip2",
            "inputAddressType": "inputAddressType2",
            "inputRoomNum": "inputRoomNum2",
            "inputAddress": "inputAddress2",
            "inputCity": "inputCity2"
        }

        if(this.checked) {
            for (var key in fieldList) {
                 element1 = document.getElementById(key);
                 element2 = document.getElementById(fieldList[key]);
                 element2.value = element1.value;
            }
         } else {
             for (var key in fieldList) {
                 element2 = document.getElementById(fieldList[key]);
                 element2.value = '';
             }
         }
    }
}
