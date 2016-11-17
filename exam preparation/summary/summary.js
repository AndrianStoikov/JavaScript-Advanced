function result(selector) {
    $(selector.toString()).on('click', function () {
        extract();
    });

    function extract() {
        let text = [];
        let strongs = $("strong")
        $("#content").find(strongs).each((index, elem) => {
            text.push($(elem).text());
        });

        buildSummary(text);

        function buildSummary(text) {
            if(text.length > 0) {
                let div = $("<div>").attr('id', "summary");
                div.append($("<h2>").text("Summary"))
                    .append($("<p>").text(text.join("")));

                let parent = $("#content").parent();
                div.appendTo(parent);
            }
        }
    }
}