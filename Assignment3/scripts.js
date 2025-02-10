// ATM Withdrawal System
function atmTest() {
    var balance = parseFloat(document.getElementById('atmBalance').value);
    var amount = parseFloat(document.getElementById('atmAmount').value);
    var pin = document.getElementById('atmPin').value;
    var enteredPin = document.getElementById('atmEnteredPin').value;
    var solution = "";

    if (enteredPin !== pin) {
        solution = "Incorrect PIN";
    } else if (amount > balance) {
        solution = "Insufficient Funds";
    } else if (amount % 100 !== 0) {
        solution = "Enter amount in multiples of 100";
    } else {
        balance -= amount;
        solution = `Withdrawal successful! Remaining balance: $${balance}`;
    }

    document.getElementById('atmSolution').value = solution;
}

// Online Shopping Discount & Free Shipping
function shoppingTest() {
    var orderAmount = parseFloat(document.getElementById('shoppingOrderAmount').value);
    var solution = "";

    if (orderAmount > 1000) {
        orderAmount *= 0.8;
        solution = "You get a 20% discount!";
    } else if (orderAmount >= 500) {
        orderAmount *= 0.9;
        solution = "You get a 10% discount!";
    } else {
        solution = "No discount available.";
    }

    if (orderAmount > 50) {
        solution += " Free shipping!";
    } else {
        orderAmount += 10;
        solution += " Express shipping ($10) added.";
    }

    document.getElementById('shoppingSolution').value = `Final Amount: $${orderAmount}\n${solution}`;
}

// Student Grading System with Extra Credit
function gradingTest() {
    var marks = parseFloat(document.getElementById('gradingMarks').value);
    var attendance = parseFloat(document.getElementById('gradingAttendance').value);
    var solution = "";

    if (attendance > 90) {
        marks += 5; 
    }

    if (marks >= 90) {
        solution = "Grade: A";
    } else if (marks >= 80) {
        solution = "Grade: B";
    } else if (marks >= 70) {
        solution = "Grade: C";
    } else if (marks >= 60) {
        solution = "Grade: D";
    } else {
        solution = "Grade: F";
    }

    document.getElementById('gradingSolution').value = solution;
}

// Smart Traffic Light System
function trafficTest() {
    var density = document.getElementById('trafficDensity').value.toLowerCase();
    var solution = "";

    if (density === "heavy") {
        solution = "Green light for 60 seconds";
    } else if (density === "moderate") {
        solution = "Green light for 40 seconds";
    } else if (density === "light") {
        solution = "Green light for 20 seconds";
    } else {
        solution = "Invalid input. Please enter Heavy, Moderate, or Light.";
    }

    document.getElementById('trafficSolution').value = solution;
}

// Movie Ticket Pricing with Time and Age Discount
function ticketTest() {
    var age = parseFloat(document.getElementById('ticketAge').value);
    var showTime = parseFloat(document.getElementById('ticketShowTime').value);
    var price = 12;
    var solution = "";

    if (showTime < 17) {
        price *= 0.8;
    }

    if (age < 12) {
        price *= 0.6; 
    } else if (age > 60) {
        price *= 0.7;
    }

    solution = `Final Price: $${price}`;
    document.getElementById('ticketSolution').value = solution;
}

// Job Application Filter
function jobTest() {
    var age = parseFloat(document.getElementById('jobAge').value);
    var experience = parseFloat(document.getElementById('jobExperience').value);
    var qualification = document.getElementById('jobQualification').value.toLowerCase();
    var solution = "";

    if (age >= 21 && age <= 55 && experience >= 2 && qualification === "bachelor's degree") {
        solution = "Eligible for the job.";
    } else {
        solution = "Not eligible for the job.";
    }

    document.getElementById('jobSolution').value = solution;
}

// E-commerce Coupon Redemption
function couponTest() {
    var orderAmount = parseFloat(document.getElementById('couponOrderAmount').value);
    var couponCode = document.getElementById('couponCode').value;
    var solution = "";

    if (couponCode === "DISCOUNT10" && orderAmount > 500) {
        orderAmount *= 0.9;
        solution = "You get a 10% discount!";
    } else if (couponCode === "FREESHIP" && orderAmount > 200) {
        solution = "Free shipping applied!";
    } else {
        solution = "Invalid coupon or conditions not met.";
    }

    document.getElementById('couponSolution').value = `Final Amount: $${orderAmount}\n${solution}`;
}

// Fitness Membership Plan
function fitnessTest() {
    var planType = document.getElementById('fitnessPlanType').value.toLowerCase();
    var wantsTrainer = document.getElementById('fitnessTrainer').checked;
    var wantsDietPlan = document.getElementById('fitnessDietPlan').checked;
    var solution = "";

    if (planType === "basic") {
        solution = "$20/month: Gym access only.";
    } else if (planType === "premium") {
        solution = "$50/month: Gym + Personal Trainer.";
    } else if (planType === "vip") {
        solution = "$80/month: Gym + Trainer + Diet Plan.";
    } else {
        solution = "Invalid plan type.";
    }

    document.getElementById('fitnessSolution').value = solution;
}

// Electricity Bill Calculation with Peak Hours
function electricityTest() {
    var units = parseFloat(document.getElementById('electricityUnits').value);
    var timeOfDay = parseFloat(document.getElementById('electricityTimeOfDay').value);
    var rate = 5;
    var solution = "";

    if (units <= 100) {
        rate = 5;
    } else if (units <= 300) {
        rate = 4;
    } else {
        rate = 3;
    }

    if (timeOfDay >= 20 || timeOfDay < 8) {
        rate *= 1.1; 
    }

    var bill = units * rate;
    solution = `Total Bill: $${bill}`;
    document.getElementById('electricitySolution').value = solution;
}

// Flight Ticket Booking System
function flightTest() {
    var classType = document.getElementById('flightClass').value.toLowerCase();
    var luggageWeight = parseFloat(document.getElementById('flightLuggage').value);
    var isStudent = document.getElementById('flightStudent').checked;
    var isSenior = document.getElementById('flightSenior').checked;
    var baseFare = 300;
    var solution = "";

    if (classType === "business") {
        baseFare += 200;
    } else if (classType === "first") {
        baseFare += 500;
    }

    if (luggageWeight > 20) {
        baseFare += 50 * Math.ceil((luggageWeight - 20) / 10);
    }

    if (isStudent) {
        baseFare *= 0.85; 
    }

    if (isSenior) {
        baseFare *= 0.9; 
    }

    solution = `Total Fare: $${baseFare}`;
    document.getElementById('flightSolution').value = solution;
}
