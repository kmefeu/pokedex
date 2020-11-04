function weakAgainst(types) {

    let tagsRow = []

    types.forEach(typeElement => {

        let typeName = typeElement.type.name

        let weaknesses = []

        switch (typeName) {
            case fighting:
                weaknesses.push("dark");
                weaknesses.push("rock");
                weaknesses.push("bug");
                break;

            case flying:
                weaknesses.push("electric");
                weaknesses.push("rock");
                weaknesses.push("ice");
                break;

            case poison:
                weaknesses.push("ground");
                weaknesses.push("psychic");
                break;

            case ground:
                weaknesses.push("water");
                weaknesses.push("grass");
                weaknesses.push("ice");
                break;

            case rock:
                weaknesses.push("flying");
                weaknesses.push("psychic");
                weaknesses.push("fairy");
                break;

            case bug:
                weaknesses.push("fire");
                weaknesses.push("flying");
                weaknesses.push("rock");
                break;

            case ghost:
                weaknesses.push("normal");
                weaknesses.push("fighting");
                break;

            case steel:
                weaknesses.push("fire");
                weaknesses.push("ground");
                weaknesses.push("fighting");
                break;

            case fire:
                weaknesses.push("water");
                weaknesses.push("ground");
                weaknesses.push("rock");
                break;

            case water:
                weaknesses.push("grass");
                weaknesses.push("electric");
                break;

            case grass:
                weaknesses.push("fire");
                weaknesses.push("flying");
                weaknesses.push("poison");
                weaknesses.push("bug");
                break;

            case electric:
                weaknesses.push("ground");
                break;

            case psychic:
                weaknesses.push("bug");
                weaknesses.push("ghost");
                weaknesses.push("dark");
                break;

            case ice:
                weaknesses.push("fire");
                weaknesses.push("rock");
                weaknesses.push("fighting");
                weaknesses.push("steel");
                break;

            case dragon:
                weaknesses.push("ice");
                weaknesses.push("dragon");
                weaknesses.push("fairy");
                break;

            case fairy:
                weaknesses.push("poison");
                weaknesses.push("dragon");
                weaknesses.push("steel");
                break;

            case dark:
                weaknesses.push("fighting");
                weaknesses.push("bug");
                weaknesses.push("fairy");
                break;

            default:
                break;
        }
        tagsRow.push(weaknesses);
    });
    return tagsRow;
}

// grass 
// poison 
// normal 
// fighting
// flying
// ground
// rock 
// bug 
// ghost
// steel
// fire 
// water
// electric
// psychic
// ice 
// dark
// fairy
// dragon