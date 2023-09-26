window.onload = function() {
    var fisrstTimeClickSubmit = false;

    var renderer = new Renderer();
    renderer.drawGraph();

    var eventAdder = new EventAdder(renderer);
    eventAdder.addEventForXButton();
    eventAdder.addEventForRadio();
    eventAdder.addEventForSubmit();
    eventAdder.addEventForForm();



    //создание таблицы на той же странице
    // document.getElementById("submitBtn").addEventListener("click", () => {
    //     addTable();
    // });


    // var data = Array();
    // data.push("x");
    // data.push("y");
    // data.push("r");
    // data.push("condition");
    // data.push("work_time");
    // data.push("time");

    // function addTable() {
    //     let myTableDiv = document.getElementById("results");
    //     let table = document.createElement("TABLE");
    //     table.id = "tableResult";
    //     table.style = "margin: auto";
    //     let tableBody = document.createElement("TBODY");

    //     if (document.getElementById("tableResult") != null) {
    //         document.getElementById("tableResult").remove();
    //     }

    //     table.appendChild(tableBody);

    //     let heading = new Array();
    //     heading[0] = "x";
    //     heading[1] = "y";
    //     heading[2] = "r";
    //     heading[3] = "Попадание точки в график";
    //     heading[4] = "Время выполнения (в милисекундах)";
    //     heading[5] = "Время";

    //     let parseData = JSON.parse(xhr.responseText);
    //     let numberOfRequests = parseData["number_of_requests"];
    //     let results = new Array();

    //     for (let i = 0; i < numberOfRequests; i++) {
    //         let resultId = "request_number_" + i;
    //         results.push(parseData[resultId]);
    //     }

    //     //TABLE COLUMNS
    //     let tr = document.createElement("TR");
    //     tableBody.appendChild(tr);
    //     for (let i = 0; i < heading.length; i++) {
    //         let th = document.createElement("TH");
    //         th.width = "150";
    //         th.appendChild(document.createTextNode(heading[i]));
    //         tr.appendChild(th);
    //     }

    //     //TABLE ROWS
    //     for (let i = 0; i < results.length; i++) {
    //         let tr = document.createElement("TR");
    //         for (j = 0; j < data.length; j++) {
    //             let td = document.createElement("TD");
    //             td.appendChild(document.createTextNode(results[i][data[j]]));
    //             tr.appendChild(td);
    //         }
    //         tableBody.appendChild(tr);
    //     }
    //     myTableDiv.appendChild(table);
    // }
}