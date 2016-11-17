class Post {
    constructor(title, body, author) {
        this.title = title;
        this.body = body;
        this.author = author;
    }

    addToSelector(selector) {
        let div = $("<div>").addClass(`post ${this.author}`);
        div.append($("<h3>").addClass("title").text(this.title));
        div.append($("<p>").addClass("body").text(this.body));
        div.append($("<p>").addClass("author").text(this.author));
        div.appendTo(selector);
    }
}

module.exports = Post;