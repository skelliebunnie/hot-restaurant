$("document").ready(function() {
  // tables
  $.ajax({
    url: `/api/tables`,
    method: "GET"
  }).then(function(response) {
  	$("#reservations").empty();

  	for(var i in response) {
  		let listNum = parseInt(i) + 1;
  		let item = $("<li>", {class: "list-group-item"});
  		let num = $("<span>", {class: "list-number"});
  		num.text(listNum);
  		item.text(`${response[i].name} {${response[i].id}}`);
  		item.prepend(num);
  		item.append("<i class='fad fa-trash-alt'></i>");

  		$("#reservations").append(item);
  	}
  });

  // waitlist
  $.ajax({
    url: `/api/waitlist`,
    method: "GET"
  }).then(function(response) {
  	$("#waitlist").empty();

  	for(var i in response) {
  		let listNum = parseInt(i) + 1;
  		let item = $("<li>", {class: "list-group-item"});
  		let num = $("<span>", {class: "list-number"});
  		num.text(listNum);
  		item.text(`${response[i].name} {${response[i].id}}`);
  		item.prepend(num);
  		item.append("<i class='fad fa-trash-alt'></i>");

  		$("#waitlist").append(item);
  	}
  });

  $("#makeReservation").click(function(e) {
  	e.preventDefault();

  	var newReservation = {
  		name: $("#name").val().trim(),
  		phoneNumber: $("#phoneNumber").val().trim(),
  		email: $("#email").val().trim()
  	};

  	if($("#name").val() !== "") {
  		$.post(window.location.origin + "/api/addReservation", newReservation, function(data) {
	  		if(data.id <= 5) {
	  			alert("You're officially booked!");
	  		} else {
	  			alert("Sorry, you're on the waitlist");
	  		}

	  		$("#name").val("");
	  		$("#email").val("");
	  		$("#phoneNumber").val("");
	  	});
  	}
  });
});