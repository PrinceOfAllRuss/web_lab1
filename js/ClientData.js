class ClientData {
	x;
	y;
	r;
	constructor() {
		this.x = 0;
		this.y = 0;
		this.r = 1;
	}

	getData() {
        let condition = true;
        let coordinatesX = document.querySelector(".btn.active");
        this.x = Number(coordinatesX.value);
        document.getElementById("x").value = this.x;
        let coordinateY = document.getElementById("y").value.replace(",",".");
        
        condition = this.inputValidation();
        if (condition) {
            this.y = Number(coordinateY);
        } else {
            return condition;
        }

        console.log(this.x, this.y, this.r)

        return condition;
    }

	inputValidation() {
		let coordinateY = document.getElementById("y").value.replace(",",".");
        
        if (coordinateY != "" && !isNaN(coordinateY)) {
            this.y = Number(coordinateY);
            if (this.y > 3 || this.y < -3) {
                document.getElementById("error").innerHTML = "Координата Y не входит в указанный диапазон";
                this.y = 0;
                return false;
            }
        } else {
            document.getElementById("error").innerHTML = "Введите число в поле для координаты Y";
            return false;
        }

        return true;
	}
}