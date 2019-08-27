module.exports = [
    {
        name: "KY-016 RGB FULL COLOR LED MODULE",
        blocks: [
            {
              xml: `<block type="rgb_block">
                            <value name="RGB_RED_PIN">
                                <shadow type="math_number">
                                    <field name="NUM"></field>
                                </shadow>
                            </value>
                            <value name="RGB_BLUE_PIN">
                                <shadow type="math_number">
                                    <field name="NUM"></field>
                                </shadow>
                            </value>
                            <value name="RGB_GREEN_PIN">
                                <shadow type="math_number">
                                    <field name="NUM"></field>
                                </shadow>
                            </value>
                        </block>`
            }
        ]
    }
];