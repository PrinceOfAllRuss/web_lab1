class TableConstructor {
	data;
	
	constructor() {
		this.data = Array();
		data.push("x");
		data.push("y");
		data.push("r");
		data.push("condition");
		data.push("work_time");
		data.push("time");
	}
    
    addTable(json) {
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

        let parseData = json;
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
            for (j = 0; j < this.data.length; j++) {
                let td = document.createElement("TD");
                td.appendChild(document.createTextNode(results[i][data[j]]));
                tr.appendChild(td);
            }
            tableBody.appendChild(tr);
        }
        myTableDiv.appendChild(table);
    }
}