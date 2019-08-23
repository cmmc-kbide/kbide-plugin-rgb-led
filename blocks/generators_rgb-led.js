Blockly.JavaScript["rgb_block"] = function(block) {
	var value_rgb_red_pin = Blockly.JavaScript.valueToCode(
	  block,
	  "RGB_RED_PIN",
	  Blockly.JavaScript.ORDER_ATOMIC
	);
	var value_rgb_blue_pin = Blockly.JavaScript.valueToCode(
	  block,
	  "RGB_BLUE_PIN",
	  Blockly.JavaScript.ORDER_ATOMIC
	);
	var value_rgb_green_pin = Blockly.JavaScript.valueToCode(
	  block,
	  "RGB_GREEN_PIN",
	  Blockly.JavaScript.ORDER_ATOMIC
	);
	// TODO: Assemble JavaScript into code variable.
	var code = `
	#SETUP
		pinMode (${value_rgb_red_pin}, OUTPUT);
	  	pinMode (${value_rgb_blue_pin}, OUTPUT);
	  	pinMode (${value_rgb_green_pin}, OUTPUT);
	#END
	`;
	return code;
};