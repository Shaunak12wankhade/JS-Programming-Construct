const prompt = require("prompt-sync")();

let number = prompt("Enter a positive number: ");

if (number == 1)
{
    console.log("1 is a prime number");
}
else if (number > 1)
 {
    for (let i = 2; i < number; i++)
     {
        if (number % i == 0)
         {
            console.log(number+" is not a prime number");
            break;
        }
        else 
        {
            console.log(number+" is a prime number");
        }
    }
}

else
{
    console.log("The number is not a prime number");
}