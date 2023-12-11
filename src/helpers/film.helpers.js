export function filterFilmsByDirector(list, director) {
   if (!director) {
    return list;
   }
      
    return list.filter((film, index, array) => {
        return film.director == director
    });
}

export function getListOf(list, prop) {
    const result = [];
    for (let i = 0; i < list.length; i++) {
        if (!result.includes(list[i][prop])) {
            result.push(list[i][prop]);
        }
    }

    return result;
}

