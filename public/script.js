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

  		$("#waitlist").append(item);
  	}
  });
});