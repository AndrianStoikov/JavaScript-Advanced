function notebook (inputRows) {
    let notebook = new Map();
    for (let row of inputRows) {
        let [color,information, subInformation] = row.split("|");
        if(!notebook.has(color))
            notebook.set(color, new Map());
        if(!notebook.get(color).has("win"))
            notebook.get(color).set("win", 0);
        if(!notebook.get(color).has("loss"))
            notebook.get(color).set("loss", 0);
        if(!notebook.get(color).has("opponents"))
            notebook.get(color).set("opponents", []);

        if(information == "age") {
            notebook.get(color).set("age", subInformation);
        } else if (information == "name") {
            notebook.get(color).set("name", subInformation);
        } else {
            if(information == "loss") {
                notebook.get(color).set("loss", notebook.get(color).get("loss") + 1);
            }
            if(information == "win") {
                notebook.get(color).set("win", notebook.get(color).get("win") + 1);
            }

            notebook.get(color).get("opponents").push(subInformation);
        }
    }

    console.log(notebook);

    notebook = filterNotebook(notebook);
    notebook = calculateRank(notebook);
    function calculateRank(notebookToCalculateRank) {
        for(let sheet in notebookToCalculateRank) {
            let win = notebookToCalculateRank[sheet]["win"] + 1;
            let loss = notebookToCalculateRank[sheet]["loss"] + 1;
            notebookToCalculateRank[sheet]["rank"] = (win / loss).toFixed(2);
            delete notebookToCalculateRank[sheet]["win"];
            delete notebookToCalculateRank[sheet]["loss"];
        }
        return notebookToCalculateRank;
    }
    function filterNotebook(notebookToFilter) {
        for (let sheet in notebookToFilter) {
            let info  = notebookToFilter[sheet];
            if(info["age"] === undefined || info["name"] === undefined) delete notebookToFilter[sheet];
        }
        return notebookToFilter;
    }
}

notebook (
    [
        'purple|age|99',
        'red|age|44',
        'blue|win|pesho',
        'blue|win|mariya',
        'purple|loss|Kiko',
        'purple|loss|Kiko',
        'purple|loss|Kiko',
        'purple|loss|Yana',
        'purple|loss|Yana',
        'purple|loss|Manov',
        'purple|loss|Manov',
        'red|name|gosho',
        'blue|win|Vladko',
        'purple|loss|Yana',
        'purple|name|VladoKaramfilov',
        'blue|age|21',
        'blue|loss|Pesho'
    ]
);