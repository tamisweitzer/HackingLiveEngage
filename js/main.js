$(document).ready(function() {
  console.log("page loaded");
  // Tests jQuery loaded  correctly
    alert("jQuery");
  // Test SPServices loaded correctly after jQuery
    alert($().SPServices.SPGetCurrentSite())
});
