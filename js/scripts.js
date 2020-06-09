// business Logic
function checkLevel(array) {
  if (array.length <= 2) {
    return "Low"
  } else if (array.length > 2 && array.length <= 4) {
    return "Medium"
  } else {
    return "High"
  }
};

function alarmingOrNot(string1, string2) {

  if (string1 === "High" || string2 === "High") {
    return "High" 
  } else if (string1 === "Medium" || string2 === "Medium") {
    return "Medium"
  } else if (string1 === "Low" || string2 === "Low") {
    return "Low"
  } 
};

function whatWeThink(result) {
  if ( result === "Low") {
    return "So we think you're fine..."
  } else if ( result === "Medium") {
    return "You could use some more stress relieving activities"
  } else if (result === "High") {
    return "Please get help."
  }
}
//UI logic

$(document).ready(function() {
  $("#input").submit(function(event) {
    let stress = [];
    let symptom = [];
    let reliever = [];
    event.preventDefault();
    $("#output").show();
    $("input:checkbox[name=stress]:checked").each(function() {
      stress.push($(this).val());
    });

    const stressLevel = checkLevel(stress);

    $("input:checkbox[name=symptom]:checked").each(function() {
      symptom.push($(this).val());
    });

    const symptomLevel = checkLevel(symptom);

    $("input:checkbox[name=reliever]:checked").each(function() {
      reliever.push($(this).val());
    });

    const relieverLevel = checkLevel(reliever);

    $("#output").append("Your stress is: " + stressLevel + "<br>")
    $("#output").append("Your health risk is: " + symptomLevel + "<br>")
    $("#output").append("Your stress relieving activity is: " + relieverLevel + "<br>")

    const symptomAndHealth = alarmingOrNot(stressLevel, symptomLevel);
    const result = alarmingOrNot(relieverLevel, symptomAndHealth);
    const ourOutput = whatWeThink(result);

    $("#output").append(ourOutput)
  });
});

