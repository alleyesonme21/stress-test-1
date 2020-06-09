// business Logic

//UI logic

$(document).ready(function() {
  $("#input").submit(function(event) {
    let stress = [];
    let stressLevel = null;
    let symptom = [];
    let symptomLevel = null;
    let reliever = [];
    let relieverLevel = null;
    event.preventDefault();
    $("#output").show();
    $("input:checkbox[name=stress]:checked").each(function() {
      stress.push($(this).val());
    });
    if (stress.length <= 2) {
      stressLevel = "Low";
    } else if (stress.length > 2 && stress.length <= 4) {
      stressLevel = "Medium";
    } else {
      stressLevel = "High";
    }

    $("input:checkbox[name=symptom]:checked").each(function() {
      symptom.push($(this).val());
    });

    if (symptom.length <= 2) {
      symptomLevel = "Low";
    } else if (symptom.length > 2 && symptom.length <= 4) {
      symptomLevel = "Medium"
    } else {
      symptomLevel = "High"
    }

    $("input:checkbox[name=reliever]:checked").each(function() {
      reliever.push($(this).val());
    });

    if (reliever.length <= 2) {
      relieverLevel = "Low";
    } else if (reliever.length > 2 && reliever.length <= 4) {
      relieverLevel = "Medium"
    } else {
      relieverLevel = "High"
    }

    $("#output").append("Your stress is: " + stressLevel + "<br>")
    $("#output").append("Your health risk is: " + symptomLevel + "<br>")
    $("#output").append("Your stress relieving activity is: " + relieverLevel + "<br>")

  if (relieverLevel ===)

  });
});