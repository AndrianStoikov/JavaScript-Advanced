function medenkaWars(inputRows) {
    let naskorDamage = 0;
    let viktorDamage = 0;
    let naskorNormalAttacks = 1, naskorPreviousDamage = 0;
    let viktorNormalAttacks = 1, viktorPreviousDamage = 0;

    for(let row of inputRows) {
        let [medenki,color] = row.split(" ");
        medenki = Number(medenki);
        let damage = medenki * 60;
        if(color == "dark") {
            if (naskorPreviousDamage == damage) naskorNormalAttacks++;
            if(naskorNormalAttacks == 5) {
                damage *= 4.5;
                naskorNormalAttacks = 1;
            }
            naskorPreviousDamage = damage;
            naskorDamage += damage;
        } else {
            if (viktorPreviousDamage == damage) viktorNormalAttacks++;
            if(viktorNormalAttacks == 2) {
                damage = 2.75 * (damage);
                viktorNormalAttacks = 1;
            }
            viktorPreviousDamage = damage;
            viktorDamage += damage;
        }
    }

    if (viktorDamage > naskorDamage) {
        console.log("Winner - Vitkor");
        console.log(`Damage - ${viktorDamage}`)
    } else {
        console.log("Winner - Naskor");
        console.log(`Damage - ${naskorDamage}`)
    }
}

medenkaWars([
    '2 dark medenkas',
    '1 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas',
    '15 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas',
])