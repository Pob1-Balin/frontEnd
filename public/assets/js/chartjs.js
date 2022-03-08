app.ready(function() {


    // ==============================================
    // Vertical bar chart 1
    //
    new Chart($("#chart-vbar-1"), {
        type: 'bar',

        // Data
        //
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "",
                backgroundColor: "#004ecb",
                borderColor: "#004ecb",
                hoverBackgroundColor: "#2979ff",
                hoverBorderColor: "rgba(0,0,0,0)",
                data: [70, 45, 20, 35, 60, 40, 50, 100]
            }]
        },

        // Options
        //
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });




    // ==============================================
    // Vertical bar chart 1
    //
    new Chart($("#chart-vbar-2"), {
        type: 'bar',

        // Data
        //
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "Daily",
                hoverBorderWidth: 50,
                backgroundColor: "#2979ff",
                borderColor: "#2979ff",
                hoverBackgroundColor: "#2979ff",
                hoverBorderColor: "rgba(0,0,0,0) ",
                data: [70, 45, 20, 35, 60, 40, 50, 100]
            }]
        },

        // Options
        //
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    ///// Chart on customer page ///////

    new Chart($("#chart-vbar-3"), {
        type: 'bar',

        // Data
        //
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February", "March", "April", "May", ],
            datasets: [{
                label: "Daily",
                hoverBorderWidth: 50,
                backgroundColor: "#2979ff",
                borderColor: "#2979ff",
                hoverBackgroundColor: "#2979ff",
                hoverBorderColor: "rgba(0,0,0,0) ",
                height: 60,
                data: [70, 45, 20, 35, 60, 40, 50, 100, 30, 50, 100, 40, 70, 90, 80, 50, 60]
            }]
        },

        // Options
        //
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        },
    });




});