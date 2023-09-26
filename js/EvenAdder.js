class EventAdder {
	renderer;
	sender;

	constructor(renderer) {
		this.renderer = renderer;
		this.sender = new Sender();
	}

	addEventForXButton() {
		function onClick(notActiveBtn) {
			var activeBtn = document.getElementsByClassName("active");
			if (activeBtn[0]) {
				activeBtn[0].className = activeBtn[0].className.replace(" active", "");
				notActiveBtn.className += " active";
			}
		}
	
		var btns = document.getElementsByClassName("btn");
		for (let i = 0; i < btns.length; i++) {
			btns[i].addEventListener("click", () => onClick(btns[i]));
		}
	}

	addEventForRadio() {
		var radios = document.getElementsByClassName("radio");
    	for (let i = 0; i < radios.length; i++) {
        	radios[i].addEventListener("change", () => this.renderer.drawGraph());
    	}
	}

	addEventForSubmit() {
		document.getElementById("submitBtn").addEventListener("click", () => {
			this.sender.submitForm();
			if (this.sender.firstTimeClickSubmit) {
				this.renderer.firstTimeClickSubmit = true;
			}
		});
	}

	addEventForForm() {
		document.getElementById("myForm").addEventListener("submit", (event) => {
			event.preventDefault();
			this.sender.submitForm();
			if (this.sender.firstTimeClickSubmit) {
				this.renderer.firstTimeClickSubmit = true;
			}
		});
	}
}