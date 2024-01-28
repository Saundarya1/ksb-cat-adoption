import { translateProp } from "./assets/helpers/translateCatProps";

export function filterCats(cats, userAnswers, setFilteredCats, setNonMatchingCats) {

  const scoredCats = cats.map(cat => {
    let score = 0;
    const notMatchingTraits = [];

    for (let i = 0; i < userAnswers.length; i++) {
      const catTrait = Object.keys(cat)[i];
      if (cat[catTrait] === userAnswers[i]) {
        score += 1;
      } else {
       notMatchingTraits.push({
        trait: catTrait,
        value: cat[catTrait]
      });
      }
    }

    const translatedTraits = translateProp(notMatchingTraits);

    return { ...cat, score, translatedTraits };
  });

  
 

  scoredCats.sort((a, b) => b.score - a.score);
  const maxScore = scoredCats[0].score;
  const closestMatches = scoredCats.filter(cat => cat.score === maxScore);


  const nonMatchingCatsArray = closestMatches.map(cat => ({
    name: cat.name,
    img: cat.img,
    url: cat.url,
    traits: cat.translatedTraits
  }));


  const uniqueNonMatchingCats = Array.from(new Set(nonMatchingCatsArray.map(JSON.stringify)), JSON.parse);

  setNonMatchingCats(uniqueNonMatchingCats);

  const perfectMatches = scoredCats.filter(cat => cat.score === userAnswers.length);

  setFilteredCats({ closestMatches, perfectMatches });
};