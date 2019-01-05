module.exports = function () {
    const presets= [
        [
            "env",
            {
                "targets": {
                    "node": "current"
                }
            }
        ]
    ]
    const plugins = [
        "transform-object-rest-spread"
    ];
  
    return {
        presets,
        plugins
    };
}