Blockly.Blocks["rgb_block"] = {
    init: function() {
      this.appendDummyInput().appendField("RGB LED");
      this.appendValueInput("RGB_RED_PIN")
        .setCheck(null)
        .appendField("RED PIN");
      this.appendValueInput("RGB_BLUE_PIN")
        .setCheck(null)
        .appendField("BLUE PIN");
      this.appendValueInput("RGB_GREEN_PIN")
        .setCheck(null)
        .appendField("GREEN PIN");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
};