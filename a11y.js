// Add a11y keyboard functionality to custom buttons
$('CUSTOM-BUTTON')
	.on('keyup', function(e) {
		// Enter Key Pressed
		if(e.keyCode == '13'){
			e.preventDefault();
			$(this).click();
		}

		// Space Key Pressed
		else if(e.keyCode == '32'){
			e.preventDefault();
			$(this).click();
		}
	})
	.click(function(e) {
		// Code for click event here
	})
;