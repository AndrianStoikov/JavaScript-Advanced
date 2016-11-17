class TrainingCourse {
    constructor(title, trainer) {
        this.title = title;
        this.trainer = trainer;
        this.topics = [];
    }

    addTopic(title, date) {
        let topic = {
            title: title,
            date: date
        };
        this.topics.push(topic);
        this._orderByDate();
    }

    get firstTopic() {
        if(this.topics.length)
            return this.topics[0];
    }

    get lastTopic() {
        if(this.topics.length > 1)
            return this.topics[this.topics.length - 1];
    }

    toString() {
        let output = `Course "${this.title}" by ${this.trainer}\n`;
        if(this.topics.length < 1) {
            return output;
        } else {
            this.topics.forEach((topic) => {
                output += ` * ${topic.title} - ${topic.date}\n`;
            });

            return output.trim();
        }
    }

    _orderByDate() {
        this.topics = this.topics.sort((a,b) => {
            return new Date(a.date) - new Date(b.date);
        });
    }
}

let js = new TrainingCourse("JS Intro", "Svetlin Nakov");
js.addTopic("Maps", new Date(2016, 9, 6, 18, 0));
js.addTopic("JS Overview", new Date(2016, 8, 27, 18, 0));
js.addTopic("Program Logic", new Date(2016, 8, 29, 18, 0));
js.addTopic("Arrays", new Date(2016, 9, 3, 18, 0));

console.log(js);

//let php = new TrainingCourse("PHP Intro", "Ivan Yonkov").addTopic("Strings", new Date(2017, 2, 16, 18, 0))
//    .addTopic("PHP First Steps", new Date(2017, 2, 12, 18, 0))
//    .addTopic("Arrays", new Date(2017, 2, 14, 18, 0))

console.log(php);

