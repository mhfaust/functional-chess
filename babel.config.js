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
    const plugins = [];
  
    return {
        presets,
        plugins
    };
};