var metrics =
[
    // system stats
    {
        alias: "FS",
        unit: "GB",
        target: "fs_usage",
        series: "stats",
        transform: function(value) {
          return (value / 1024 / 1024 / 1024);
        },
        scale: true
    },
    {
        alias: "Mem",
        unit: "GB",
        target: "memory_usage",
        series: "stats",
        transform: function(value) {
          return (value / 1024 / 1024 / 1024);
        },
        scale: true
    },
    {
        alias: "CPU",
        unit: "THz",
        target: "cpu_cumulative_usage",
        series: "stats",
        transform: function(value) {
          return (value / 1024 / 1024 / 1024);
        },
        scale: true
    },

    // net stats
    {
        alias: "NetUP",
        target: "tx_bytes",
        series: "stats",
        scale: true
    },
    {
        alias: "NetDOWN",
        target: "rx_bytes",
        series: "stats",
        scale: true
    },
    {
        alias: "RdErrors",
        target: "rx_errors",
        series: "stats",
        scale: true
    },
    {
        alias: "TxErrors",
        target: "tx_errors",
        series: "stats",
        scale: true
    }
];
