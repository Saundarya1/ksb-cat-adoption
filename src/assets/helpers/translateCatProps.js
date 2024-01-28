export function translateProp(traits) {

    const translatedTraits = traits.map(trait => {
        if (trait.trait === "is healthy" && trait.value === true) {
            return "Jestem zdrowy/a :)";
        } else if (trait.trait === "is healthy" && trait.value === false) {
            return "Jestem chory/a :("
        } else if (trait.trait === "likes dogs" && trait.value === true) {
            return "Lubię psy! :D"
        } else if (trait.trait === "likes dogs" && trait.value === false) {
            return "Nie lubię psów >:("
        } else if (trait.trait === "is young" && trait.value === true) {
            return "Młodzik ;)"
        } else if (trait.trait === "is young" && trait.value === false) {
            return "Staruszek :})"
        } else if (trait.trait === "is energetic" && trait.value === true) {
            return "Energiczny -->"
        }else if (trait.trait === "is energetic" && trait.value === false) {
            return "Leniwy <--"
        }else if (trait.trait === "likes cuddles" && trait.value === true) {
            return "Miziak :3"
        }else if (trait.trait === "likes cuddles" && trait.value === false) {
            return "Niedotykalski/a :#"
        }else if (trait.trait === "likes other cats" && trait.value === true) {
            return "Lubię koty! :D"
        }else if (trait.trait === "likes other cats" && trait.value === false) {
            return "Nie lubię kotów! >:("
        } else {
            throw console.error("Look at the translateCatProps helper ;)");
        }
    });

    return translatedTraits;
}