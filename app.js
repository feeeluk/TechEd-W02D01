let listenForEvent = document.getElementById("formButton");
listenForEvent.addEventListener("click", CheckHowManyCoffees);


function CheckHowManyCoffees()
{
    let numberOfCoffeesToBeAwake = parseInt(document.getElementById("numberOfCoffeesToBeAwake").value);
    
    let actualNumberOfCoffeesDrank = parseInt(document.getElementById("actualNumberOfCoffeesDrank").value);

    let displayText;

    if(actualNumberOfCoffeesDrank < numberOfCoffeesToBeAwake)
    {
        displayText = "You are probably not awake yet";
    }
    
    else if(actualNumberOfCoffeesDrank == numberOfCoffeesToBeAwake)
    {
        displayText = "You should be awake";
    }
    
    else
    {
        displayText = "You must be BUZZING!";
    }

    ShowResult(displayText);
}

function ShowResult(number)
{
    document.getElementById("result").textContent = number;
}