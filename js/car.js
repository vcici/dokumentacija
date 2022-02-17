/**
 * Suvedus masinos modeli, kuro kieki, sanaudas magistraleje, sanaudas vidutiniskai ir sanaudas mieste, gaunamas sakinys, kuriame nurodoma kiek automobilis gali nuvaziuoti.
 * @param {string} modelis masinos modelis
 * @param {number} kuroKiekis kuro kiekis
 * @param {number} sanaudosMagistralej sanaudos magistraleje
 * @param {number} sanaudosVidutiniskai sanaudos vidutiniskai
 * @param {number} sanaudosMieste sanaudos mieste 
 * @returns sakinys, kuriame nurodoma kiek tam tikras automobilis gali nuvaziuoti
 */
function car(modelis, kuroKiekis, sanaudosMagistralej, sanaudosVidutiniskai, sanaudosMieste) {
    let atstumasMagistralej = (kuroKiekis * 100 / sanaudosMagistralej).toFixed();
    let atstumasVidutiniskai = (kuroKiekis * 100 / sanaudosVidutiniskai).toFixed();
    let atstumasMieste = (kuroKiekis * 100 / sanaudosMieste).toFixed();
    return `${modelis} su ${kuroKiekis}l baku, gali nuvaziuoti ${atstumasMagistralej}km (magistralej, kai sanaudos yra ${sanaudosMagistralej}l/100km), ${atstumasVidutiniskai}km (vidutiniskai, kai sanaudos yra ${sanaudosVidutiniskai}l/100km) ir ${atstumasMieste}km (mieste, kai sanaudos yra ${sanaudosMieste}l/100km).`;
}

module.exports = car;