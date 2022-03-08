(function() {

    const db = {

        loadData: function (filter) {
            return $.grep(this.clients, function (client) {
                return (!filter.Matricule || client.Matricule.indexOf(filter.Matricule) > -1)
                    && (filter.Name === undefined || client.Name === filter.Name)
                    && (!filter.Date || client.Date.indexOf(filter.Date) > -1)
                    && (!filter.TimeIn || client.TimeIn === filter.TimeIn)
            });
        },

        insertItem: function (insertingClient) {
            this.clients.push(insertingClient);
        },

        updateItem: function (updatingClient) {
        },

        deleteItem: function (deletingClient) {
            const clientIndex = $.inArray(deletingClient, this.clients);
            this.clients.splice(clientIndex, 1);
        }

    };

    window.db = db;

    db.clients = [
        {
            "Matricule": "20T003",
            "Name": "Le Hacheur",
            "Date": new Date(),
            "TimeIn": new Date().getDate(),
            "TimeOut": Date,
        },
        {
            "Matricule": "20T003",
            "Name": "Le Hacheur",
            "Date": new Date(),
            "TimeIn": new Date().getDate(),
            "TimeOut": Date,
        },
        {
            "Matricule": "20T003",
            "Name": "Le Hacheur",
            "Date": new Date(),
            "TimeIn": new Date().getDate(),
            "TimeOut": Date,
        },
        {
            "Matricule": "20T003",
            "Name": "Le Hacheur",
            "Date": new Date(),
            "TimeIn": new Date().getDate(),
            "TimeOut": Date,
        },
        {
            "Matricule": "20T003",
            "Name": "Le Hacheur",
            "Date": new Date(),
            "TimeIn": new Date().getDate(),
            "TimeOut": Date,
        },
        {
            "Matricule": "20T003",
            "Name": "Le Hacheur",
            "Date": new Date(),
            "TimeIn": new Date().getDate(),
            "TimeOut": Date,
        },
        {
            "Matricule": "20T003",
            "Name": "Le Hacheur",
            "Date": new Date(),
            "TimeIn": new Date().getDate(),
            "TimeOut": Date,
        },
        {
            "Matricule": "20T003",
            "Name": "Le Hacheur",
            "Date": new Date(),
            "TimeIn": new Date().getDate(),
            "TimeOut": Date,
        },
        {
            "Matricule": "20T003",
            "Name": "Le Hacheur",
            "Date": new Date(),
            "TimeIn": new Date().getDate(),
            "TimeOut": Date,
        },
        {
            "Matricule": "20T003",
            "Name": "Le Hacheur",
            "Date": new Date(),
            "TimeIn": new Date().getDate(),
            "TimeOut": Date,
        },
        {
            "Matricule": "20T003",
            "Name": "Le Hacheur",
            "Date": new Date(),
            "TimeIn": new Date().getDate(),
            "TimeOut": Date,
        },

    ];


}());
