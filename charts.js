// ==========================================
// OJASVA Dashboard Charts
// ==========================================

// ---------- Global Defaults ----------

Chart.defaults.font.family = "Poppins";
Chart.defaults.color = "#6B7280";

// ==========================================
// Doughnut Chart
// ==========================================

const pieCtx = document.getElementById("pieChart");

new Chart(pieCtx, {

    type: "doughnut",

    data: {

        labels: [

            "Refrigerator",
            "Air Conditioner",
            "Fan",
            "TV",
            "Lights"

        ],

        datasets: [{

            data: [35,25,15,10,15],

            backgroundColor: [

                "#10B981",
                "#2563EB",
                "#F59E0B",
                "#EF4444",
                "#8B5CF6"

            ],

            borderWidth:0,

            hoverOffset:18

        }]

    },

    options:{

        responsive:true,

        plugins:{

            legend:{

                position:"bottom"

            }

        }

    }

});

// ==========================================
// Line Chart
// ==========================================

const lineCtx = document.getElementById("lineChart");

new Chart(lineCtx,{

    type:"line",

    data:{

        labels:[

            "12 AM",
            "4 AM",
            "8 AM",
            "12 PM",
            "4 PM",
            "8 PM",
            "11 PM"

        ],

        datasets:[{

            label:"Energy (kWh)",

            data:[0.4,0.2,0.9,1.4,1.8,2.5,2.2],

            borderColor:"#10B981",

            backgroundColor:"rgba(16,185,129,.18)",

            fill:true,

            tension:.45,

            pointRadius:5,

            pointBackgroundColor:"#10B981"

        }]

    },

    options:{

        responsive:true,

        plugins:{

            legend:{

                display:false

            }

        }

    }

});

// ==========================================
// Peak Usage Bar Chart
// ==========================================

const barCtx = document.getElementById("barChart");

new Chart(barCtx,{

    type:"bar",

    data:{

        labels:[

            "Morning",
            "Afternoon",
            "Evening",
            "Night"

        ],

        datasets:[{

            data:[3.2,5.4,8.8,4.1],

            backgroundColor:[

                "#10B981",
                "#2563EB",
                "#F59E0B",
                "#8B5CF6"

            ],

            borderRadius:10

        }]

    },

    options:{

        responsive:true,

        plugins:{

            legend:{

                display:false

            }

        }

    }

});

// ==========================================
// Horizontal Bar Chart
// ==========================================

const horizontalCtx = document.getElementById("horizontalChart");

new Chart(horizontalCtx,{

    type:"bar",

    data:{

        labels:[

            "Air Conditioner",
            "Refrigerator",
            "Fan",
            "TV",
            "Lights"

        ],

        datasets:[{

            data:[42,35,18,12,9],

            backgroundColor:"#2563EB",

            borderRadius:12

        }]

    },

    options:{

        responsive:true,

        indexAxis:"y",

        plugins:{

            legend:{

                display:false

            }

        },

        scales:{

            x:{

                beginAtZero:true

            }

        }

    }

});