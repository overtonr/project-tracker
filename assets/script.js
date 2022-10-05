//header that welcomes user and displays current time and date using moment.js "setInterval()";
//page refreshes every second to update time every second

$(document).ready(function () {
    var today = moment();
    // today = moment(new Date()),
    refreshToday = function(){
        today = moment(new Date()),
        $("#currentTimeStamp").text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"))
    };
    refreshToday();
    setInterval(refreshToday(),1000);
});

//optional: create bootstrap card that explains how to use the application and has a button to open bootstrap modal dialog

//modal contains:
    //name of the project
    //dropdown of the type of project (<select>)
    //hourly wage of the project
    //the due date for the project (jquery UI date picker)

//bootstrap table the project's info can be printed to with columns with the following
    //project name
    //project type
    //hourly wage
    //due date 
    //days until due date (calculated using moment.js)
    //estimated total wages ($/hr * 8hrs * # of days til due date)