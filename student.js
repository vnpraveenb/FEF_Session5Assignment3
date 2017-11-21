
// Created an object literal
var studentDetails ={studentName: "Rakesh Kalia", DOB: "01/01/2000" , skills: "JavaScript Coding"};

document.write("<br> Printing the details of the student object <br><hr>");

// Prints details of the object on the web page after loading
document.write("Student Name: "  + studentDetails.studentName +" <br>");
document.write("DOB: "  + studentDetails.DOB +" <br>");
document.write("Skills: "  + studentDetails.skills +" <br> ");


document.write("<br> Added Address and printing the Address <br> <br>");

// Adding the Address Property to the studentDetails Object
studentDetails.address = {state:"Andhra Pradesh", city:"Hyderabad",country: "India", pincode: 123456};

document.write("Address: <br> "  + "&nbsp;&nbsp;State: " + studentDetails.address.state +" <br>" + "&nbsp;&nbsp;City: " + studentDetails.address.city +" <br>" + "&nbsp;&nbsp;Country: " + studentDetails.address.country +" <br>" + "&nbsp;&nbsp;Pincode: " + studentDetails.address.pincode +" <br>");


document.write("<br> Added EyeColor and Mother's Name and printing the them <br> <br>");

// Adding the EyeColor Property to the studentDetails Object
studentDetails.eyeColor= "Black";

// Adding the Mother's Name Property to the studentDetails Object
studentDetails.motherName = "Uma Kalia";

document.write("EyeColor: "  + studentDetails.eyeColor +" <br>");
document.write("Mother's Name: "  + studentDetails.motherName +" <br>");


document.write("<br><br>Deleting Student EyeColor and printing the Object Details <br> ");

// Deleting the EyeColor Property of the studentDetails Object
delete studentDetails.eyeColor;


document.write("<br><br> Printing the details of the student object <br><hr>");

// Prints details of the studentDetails Object after deleting the EyeColor Property
document.write("Name: "  + studentDetails.studentName +" <br>");
document.write("DOB: "  + studentDetails.DOB +" <br>");
document.write("Skills: "  + studentDetails.skills +" <br>");
 document.write("Address: <br> "  + "&nbsp;&nbsp;State: " + studentDetails.address.state +" <br>" + "&nbsp;&nbsp;City: " + studentDetails.address.city +" <br>" + "&nbsp;&nbsp;Country: " + studentDetails.address.country +" <br>" + "&nbsp;&nbsp;Pincode: " + studentDetails.address.pincode +" <br>");
document.write("Mother's Name: "  + studentDetails.motherName +" <br>");


