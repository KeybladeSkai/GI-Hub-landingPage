"use strict";

const details = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  field_of_study: "",
  webinar_expectation: "",
};

document.getElementById("btn").addEventListener("submit", (e) => {
  e.preventDefault();
  const firstName = document.getElementById("fname");
  const lastName = document.getElementById("lname");
  const email = document.getElementById("email");
  const phone = document.getElementById("phonenumber");
  const country = document.getElementById("country");
  const field_of_study = document.getElementById("fieldofstudy");
  const webinar_expectation = document.getElementById("expectations");
  details.firstName = firstName.value;
  details.lastName = lastName.value;
  details.email = email.value;
  details.phone = phone.value;
  details.country = country.value;
  details.field_of_study = field_of_study.value;
  details.webinar_expectation = expectations.value;
  if (
    !details.firstName ||
    !details.lastName ||
    !details.email ||
    !details.phone ||
    !details.country ||
    !details.field_of_study ||
    !details.webinar_expectation
  ) {
    console.log("input something");
  } else {
    console.log(details);
 
    fetch("https://event-registration-api1-0-brown.vercel.app/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok"); // Handle errors
        }
        return response.json();
        // Parse the JSON response
      })
      .then((data) => {
        console.log("Success:", data); // Handle the success response
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        phone.value = "";
        country.value = "";
        field_of_study.value = "";
        webinar_expectation.value = "";
      })
      .catch((error) => {
        console.error("Error:", error.message); // Handle any errors that occurred during the request
      })
      .finally(() => {
        console.log("Request complete"); // Runs after success or error
      });
  }
});
