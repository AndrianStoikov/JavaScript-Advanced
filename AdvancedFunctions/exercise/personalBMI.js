let result = (function personalBMI(name, age, weight, height) {
    return (function () {
        let obj = {
            name: name,
            personalInfo: {
                age: age,
                weight: weight,
                height: height
            }
        };

        obj["BMI"] = (function () {
            return Math.round(weight / Math.pow(height / 100, 2));
        }) ();

        obj["status"] = (function () {
            let bmi = obj["BMI"];

            if (bmi < 18.5) return "underweight";
            if (bmi < 25) return "normal";
            if (bmi < 30) return "overweight";
            else return "obese";
        }) ();

        if (obj["status"] == "obese") {
            obj["recommendation"] = 'admission required';
        }

        return obj;
    }) ();
});

var chart = result('Peter', 29, 75, 182);

console.log(chart.BMI);