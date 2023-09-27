class Sender {
	clientData;
	renderer;

	constructor() {
		this.clientData = new ClientData();
		this.renderer = new Renderer();
	}

	submitForm() {
        let condition = this.clientData.getData();
		if (condition) {
			let self = this;
			$.ajax( {
				url: '../index.php',
				method: 'get',
				dataType: 'json',
				data: {"x": this.clientData.x, "y": this.clientData.y, "r": this.clientData.r},
				success: function(data) {
					if (data['result'] != 'ok') {
						console.log(data['result']);
					} else {
						console.log(data);
						location = "../table.php"
						self.renderer.firstTimeClickSubmit = true;
						let elName = 'request_number_' + (data.number_of_requests - 1);
						let x = Number(data[elName].x);
						let y = Number(data[elName].y);
						let r = Number(data[elName].r);
						self.clientData.x = x;
						self.clientData.y = y;
						localStorage.setItem("x", x);
						localStorage.setItem("y", y);
						localStorage.setItem("r", r);
						localStorage.setItem("json", data);	
						// addTable(); для формирования таблицы на той же страницы
						console.log("done");
					}
				}
			});
		}
    }
}