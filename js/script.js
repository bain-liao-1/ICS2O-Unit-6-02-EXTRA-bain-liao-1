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

/**
 * This function conducts multiplication with addition.
 */
function multiplyThroughAddition() {
  const factor = parseInt(document.getElementById("factor").value)
  let multiplier = parseInt(document.getElementById("multiplier").value)
  let product = 0

  // Perform multiplication using addition
  while (multiplier > 0) {
    product += factor
    multiplier -= 1
  }

  // Save the product in localStorage
  localStorage.setItem('product', product)

  // Display the result
  document.getElementById("result").innerText = "The product is " + product + "."
}

// On page load, check and display the product if it exists
window.onload = function() {
  if (localStorage.getItem('product')) {
    const savedProduct = localStorage.getItem('product')
    document.getElementById("result").innerText = "The product is " + savedProduct + "."
  }
}
