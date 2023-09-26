<?php
if (empty(session_id()) && !headers_sent()) {
	session_start();
}
?>

<!DOCTYPE html>
<html lang="ru">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>

<body>
	<template id="value" data-value='<?php echo json_encode($_SESSION) ?>'></template>
	<div id="results">
		<table id="tableResult" style="margin: auto">
			<tr>
				<th width="150">x</th>
				<th width="150">y</th>
				<th width="150">r</th>
				<th width="150">Попадание точки в график</th>
				<th width="150">Время выполнения (в милисекундах)</th>
				<th width="150">Время</th>
			</tr>
			<script language='javascript'>
				var data = Array();
				data.push("x");
				data.push("y");
				data.push("r");
				data.push("condition");
				data.push("work_time");
				data.push("time");

				function addTable() {
					let myTableDiv = document.getElementById("results");
					let table = document.createElement("TABLE");
					table.id = "tableResult";
					table.style = "margin: auto";
					let tableBody = document.createElement("TBODY");

					if (document.getElementById("tableResult") != null) {
						document.getElementById("tableResult").remove();
					}

					table.appendChild(tableBody);

					let heading = new Array();
					heading[0] = "x";
					heading[1] = "y";
					heading[2] = "r";
					heading[3] = "Попадание точки в график";
					heading[4] = "Время выполнения (в милисекундах)";
					heading[5] = "Время";

					let jsonPhp = document.getElementById("value").getAttribute("data-value");
					let parseData = JSON.parse(jsonPhp);
					let numberOfRequests = parseData["number_of_requests"];
					let results = new Array();

					for (let i = 0; i < numberOfRequests; i++) {
						let resultId = "request_number_" + i;
						results.push(parseData[resultId]);
					}

					//TABLE COLUMNS
					let tr = document.createElement("TR");
					tableBody.appendChild(tr);
					for (let i = 0; i < heading.length; i++) {
						let th = document.createElement("TH");
						th.width = "150";
						th.appendChild(document.createTextNode(heading[i]));
						tr.appendChild(th);
					}

					//TABLE ROWS
					for (let i = 0; i < results.length; i++) {
						let tr = document.createElement("TR");
						for (j = 0; j < data.length; j++) {
							let td = document.createElement("TD");
							td.style = 'vertical-align: middle';
							td.appendChild(document.createTextNode(results[i][data[j]]));
							tr.appendChild(td);
						}
						tableBody.appendChild(tr);
					}
					myTableDiv.appendChild(table);
				}
				console.log("you are here");
				addTable();
			</script>
		</table>
	</div>
</body>

</html>