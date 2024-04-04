/*
This function, buildGauge, constructs a gauge chart to visualize the washing frequency of an individual's belly button. It takes the washing frequency (wfreq) as input and generates a gauge chart to represent the frequency.

@param {number} wfreq - The washing frequency of the individual's belly button.
*/
function buildGauge(wfreq) {
    // Convert the washing frequency to degrees
    let level = parseFloat(wfreq) * 20;

    // Calculate coordinates for the gauge meter point using trigonometry
    let degrees = 180 - level,
        radius = .5,
        radians = (degrees * Math.PI) / 180,
        x = radius * Math.cos(radians),
        y = radius * Math.sin(radians);

    // Define the path for the gauge meter point
    let mainPath = "M -.0 -0.05 L .0 0.05 L ";
        pathX = String(x),
        space = " ",
        pathY = String(y),
        pathEnd = " Z"; 
    let path = mainPath.concat(pathX, space, pathY, pathEnd);

    // Define data for the gauge chart
    let data = [
        {
            type: "scatter",
            x: [0],
            y: [0],
            marker: { size: 12, color: "850000" },
            showlegend: false,
            name: "Freq",
            text: level,
            hoverinfo: "text+name"
        },
        {
            values: [50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50],
            rotation: 90,
            text: ["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
            textinfo: "text",
            textposition: "inside",
            marker: {
                colors: [
                    "rgba(0, 105, 11, .5)",
                    "rgba(10, 120, 22, .5)",
                    "rgba(14, 127, 0, .5)",
                    "rgba(110, 154, 22, .5)",
                    "rgba(170, 202, 42, .5)",
                    "rgba(202, 209, 95, .5)",
                    "rgba(210, 206, 145, .5)",
                    "rgba(232, 226, 202, .5)",
                    "rgba(240, 230, 215, .5)",
                    "rgba(255, 255, 255, 0)"
                ]
            },
            labels: ["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
            hoverinfo: "label",
            hole: 0.5,
            type: "pie",
            showlegend: false
        }
    ];

    // Define layout for the gauge chart
    let layout = {
        shapes: [
            {
                type: "path",
                path: path,
                fillcolor: "850000",
                line: {
                    color: "850000"
                }
            }
        ],
        title: 'Belly Button Washing Frequency<br>Scrubs per Week',
        height: 500,
        width: 500,
        xaxis: {
            zeroline: false,
            showticklabels: false,
            showgrid: false,
            range: [-1, 1]
        },
        yaxis: {
            zeroline: false,
            showticklabels: false,
            showgrid: false,
            range: [-1, 1]
        }
    };

    // Get the element by ID for the gauge chart
    let GAUGE = document.getElementById("gauge");
    // Generate the gauge chart using Plotly
    Plotly.newPlot(GAUGE, data, layout);
}
