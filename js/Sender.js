class Sender {
	firstTimeClickSubmit;
	clientData;
	renderer;

	constructor() {
		this.firstTimeClickSubmit = false;
		this.xhr = new XMLHttpRequest();
		this.clientData = new ClientData();
		this.renderer = new Renderer();
	}

	submitForm() {
        let condition = this.clientData.getData();
		if (condition) {
			$.ajax( {
				url: '../index.php',
				method: 'get',
				dataType: 'json',
				data: {"x": this.clientData.x, "y": this.clientData.y, "r": this.clientData.r},
				success: function(data) {
					location = "../table.php"
					this.firstTimeClickSubmit = true;
					this.renderer.drawGraph();
					console.log("result", JSON.parse(data));
					// addTable(); для формирования таблицы на той же страницы
					console.log("done");
				}
			});
		}
		// if (condition) {
        //     let url = new URL(`http://localhost:3000/index.php?x=${this.clientData.x}&y=${this.clientData.y}&r=${this.clientData.r}`);

        //     this.xhr.open("GET", url);
        //     this.xhr.send();

        //     location = "../table.php";
        //     this.firstTimeClickSubmit = true;
        //     this.renderer.drawGraph();
        // }

		// this.xhr.onreadystatechange = function () {
		// 	if (this.xhr.readyState != 4) {
		// 		return;
		// 	}
	
		// 	if (this.xhr.status === 200) {
		// 		console.log("result", JSON.parse(this.xhr.responseText));
		// 		// addTable(); для формирования таблицы на той же страницы
		// 		console.log("done");
		// 	} else {
		// 		console.log("err", JSON.parse(xhr.responseText));
		// 	}
		// };
    }
}