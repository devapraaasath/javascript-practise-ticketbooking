function booking(){
    console.log("test1");
    var username=document.getElementById('cust_name').value;
    console.log(username);
    var moviechoice=document.getElementById('movie_choice').value;
    console.log(moviechoice);
    var numberofseats=document.getElementById('seats').value;
    console.log(numberofseats)

    if (moviechoice=="kanguva"){
        console.log("kanguva");
        var kanguva=200;
        var total=parseInt(kanguva)*parseInt(numberofseats);
        console.log(total);
        document.getElementById('output').innerHTML= "Hai " + username +", your booking bill is " + total+"&#8377" +" for Kanguva. Total seats: " + numberofseats;
    }
    else if(moviechoice=="lubber_bandthu"){
        console.log("lubber_bandthu");
        var lubber=150;
        var total=parseInt(lubber)*parseInt(numberofseats);
        console.log(total);
        document.getElementById('output').innerHTML= "Hai " + username +", your booking bill is " + total+"&#8377" +" for lubber bandthu. Total seats: " + numberofseats;

    }
    else  if(moviechoice=="lucky_basker"){
    console.log("lucky_basker");
    var lucky=150;
    var total=parseInt(lucky)*parseInt(numberofseats);
    console.log(total)
    document.getElementById('output').innerHTML= "Hai " + username +", your booking bill is " + total+"&#8377" +" for Lucky basker. Total seats: " + numberofseats;
    }
    else if (moviechoice=="Amaran"){
    console.log("Amaran");
    var amaran=200;
    var total=parseInt(amaran)*parseInt(numberofseats);
    console.log(total);
    document.getElementById('output').innerHTML= "Hai " + username +", your booking bill is " + total+"&#8377" +" for Amaran. Total seats: " + numberofseats;
    }
}