$("document").ready(function() {
	function buildLists(data) {
		$("#reservations").empty();
  	$("#waitlist").empty();

		for(var i in data) {
  		let listNum = parseInt(i) + 1;
  		let item = $("<li>", {class: "list-group-item"});
  		let icons = $("<p>");
  		let num = $("<span>", {class: "list-number"});
  		num.text(listNum);
  		icons.append(num);
  		icons.prepend(`<i class='fad fa-trash text-red-500' data-reservationID="${data[i].id}"></i>`);

  		item.html(`<span>${data[i].name}</span> <span>{Reservation ID: ${data[i].id}}</span>`);
  		item.prepend(icons);

  		if(i < 5) {
  			$("#reservations").append(item);
  		} else {
  			$("#waitlist").append(item);
  		}
  	}
	}

  // tables
  $.ajax({
    url: `/api/tables`,
    method: "GET"
  }).then(function(response) {
  	buildLists(response);  	
  });

  $("body").on('click', '.fa-trash', function() {
  	let reservationID = $(this).attr('data-reservationID');

  	$.ajax({ 
  		url: `/api/deleteReservation/${reservationID}`,
  		method: "DELETE" 
  	}).then(function(response) {
  		console.log(response);
    	buildLists(response);
    })
    .catch(function(err) {
      console.log(err);
    });
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