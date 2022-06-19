/* Your Code Here */


function createEmployeeRecord(array){
    const records ={
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return records
}

function createEmployeeRecords(array){
    let newArr = []
    array.forEach(arr=>{
        newArr.push(createEmployeeRecord(arr))
    })
    return newArr
}

function createTimeInEvent(hrs, dates){

//   time =[

//     {
//       type: "TimeIn",
//       hour: "hrs",
//       date: "dates"
//     }

//   ]
//   return time

}


function createTimeInEvent(){
 
}

// function hoursWorkedOnDate() {

// }

// function wagesEarnedOnDate(){

// }

// function allWagesFor(){
//     return allWagesFor

// }

// function findEmployeeByFirstName(srcArray, firstName){
    

// }
// function calculatePayroll(){

// }

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

