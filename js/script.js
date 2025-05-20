// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Bain Liao
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICD2O-Unit-6-02-EXTRA-bain-liao-1/sw.js", {
    scope: "/ICD2O-Unit-6-02-EXTRA-bain-liao-1/",
  })
}

let userAge = sessionStorage.getItem('userAge') ? Number(sessionStorage.getItem('userAge')) : null

  if (userAge === null) {
    userAge = parseInt(document.getElementById('user-age').value)
    sessionStorage.setItem('userAge', userAge)
  } else {
    userAge = parseInt(document.getElementById('user-age').value)
    sessionStorage.setItem('userAge', userAge)
    document.getElementById('result').innerHTML = '<p>Your age is: ' + userAge
  }

/**
 * This function checks the user's age.
 */
function ageCheck() {
  // Check the user's age
  if (userAge >= 17) {
    document.getElementById('result').innerHTML =
      '<p>You can go see an R rated movie alone.</p>'
  } else if (userAge >= 13) {
    document.getElementById('result').innerHTML =
      '<p>You can go see a PG-13 movie alone.</p>'
  } else if (userAge >= 5) {
    document.getElementById('result').innerHTML =
      '<p>You can go see a G or PG movie alone.</p>'
  } else {
    document.getElementById('result').innerHTML =
      '<p>You are too young to see most things.</p>'
  }
}
