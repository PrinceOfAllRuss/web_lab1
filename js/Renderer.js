class Renderer {
	graph;
	context;
	graphWidth;
	graphHeight;
	scaleX;
	scaleY;
	xAxis;
	yAxis;
	shiftNumberNames;
	shiftAxisNames;
    firstTimeClickSubmit;
	clientData;

	constructor() {
		this.graph = document.getElementById("graph");
		this.context = graph.getContext("2d");
		this.graphWidth = graph.clientWidth;
		this.graphHeight = graph.clientHeight;
		this.scaleX = 40;
		this.scaleY = 40;
		this.xAxis = Math.round(this.graphWidth / this.scaleX / 2) * this.scaleX;
		this.yAxis = Math.round(this.graphHeight / this.scaleY / 2) * this.scaleY;
		this.shiftNumberNames = 5;
		this.shiftAxisNames = 20;
		this.firstTimeClickSubmit = false;
	}

	drawGraphBackground() {
		this.context.fillStyle = "#ffffff"; //белый цвет для фона
		this.context.globalAlpha = 1;
		this.context.fillRect(0, 0, graph.width, graph.height);
		this.context.fillStyle = "#000000"; //черный цвет для цифр
	
		//Рисуем клетки
		this.context.font = `${Math.round(this.scaleX / 2)}px Georgia`;
		this.context.textAlign = "left";
		this.context.textBaseline = "top";
	
		this.context.beginPath();
		this.context.strokeStyle = "rgb(224, 224, 224, 1)";
		this.context.lineWidth = 1;
		for (let i = 0; i <= this.graphWidth; i = i + this.scaleX) {
			this.context.moveTo(i, 0);
			this.context.lineTo(i, this.graphHeight);
	
			this.context.fillText(
				(i - this.xAxis) / this.scaleX,
				i + this.shiftNumberNames,
				this.yAxis + this.shiftNumberNames
			);
		}
		for (let i = 0; i <= this.graphHeight; i = i + this.scaleY) {
			this.context.moveTo(0, i);
			this.context.lineTo(this.graphWidth, i);
	
			this.context.fillText(
				(this.yAxis - i) / this.scaleY,
				this.xAxis + this.shiftNumberNames,
				i + this.shiftNumberNames
			);
		}
		this.context.stroke();
		this.context.closePath();
	
		//Рисуем оси
		this.context.beginPath();
		this.context.strokeStyle = "#000000";
		this.context.lineWidth = 2;
	
		this.context.moveTo(this.xAxis, 0);
		this.context.lineTo(this.xAxis, this.graphHeight);
		this.context.fillText("y", this.xAxis - this.shiftAxisNames, 0);
	
		this.context.moveTo(0, this.yAxis);
		this.context.lineTo(this.graphHeight, this.yAxis);
		this.context.fillText("x", this.graphWidth - this.shiftAxisNames, this.yAxis - 20);
	
		this.context.stroke();
		this.context.closePath();
	}
	
	drawPoint(clientData) {
		this.context.beginPath();
		this.context.fillStyle = "#dc143c";
		this.context.globalAlpha = 1;
		this.context.arc(this.xAxis + clientData.x * this.scaleX, 
		this.yAxis - clientData.y * this.scaleY, 3, 0, 2 * Math.PI);
		this.context.fill();
		this.context.closePath();
	}
	
	drawGraph(clientData) {
		if (clientData) {
			this.clientData = clientData;
		}
		this.drawGraphBackground();
	
		let radiuses = document.querySelectorAll(".radio");
		for (let i = 0; i < radiuses.length; i++) {
			if (radiuses[i].checked) {
				this.clientData.r = Number(radiuses[i].value);
				break;
			}
		}
	
		//График
		this.context.fillStyle = "#40826d";
		this.context.strokeStyle = "rgb(64, 130, 109, 0)";
	
		//1 четверть
		this.context.beginPath();
		this.context.globalAlpha = 0.5;
		this.context.fillRect(this.xAxis, this.yAxis, (this.clientData.r / 2) * this.scaleX + 1, 
			-this.clientData.r * this.scaleY - 1);
		this.context.closePath();
	
		//2 четверть
		this.context.beginPath();
		this.context.arc(this.xAxis, this.yAxis, this.clientData.r * this.scaleX + 1, Math.PI, 1.5 * Math.PI);
		this.context.lineTo(this.xAxis, this.yAxis);
		this.context.fill();
		this.context.stroke();
		this.context.closePath();
	
		//4 четверть
		this.context.beginPath();
		this.context.lineWidth = 2;
		this.context.moveTo(this.xAxis, this.yAxis);
		this.context.lineTo(this.xAxis + (this.clientData.r / 2) * this.scaleX + 1, this.yAxis);
		this.context.lineTo(this.xAxis, this.yAxis + 2 + this.clientData.r * this.scaleY);
		this.context.lineTo(this.xAxis, this.yAxis);
		this.context.fill();
		this.context.stroke();
		this.context.closePath();
	
		if (this.clientData.x !== undefined || this.clientData.y !== undefined) {
			console.log("have data");
			this.drawPoint(clientData);
		} else console.log("no data");
	}
}