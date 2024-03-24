import Axios from './caller.service'

/**
 * Récupération de la liste des scans
 * @returns {Promise}
 */
let getAllScans = () => {
    return Axios.get('/scans/list')
}

/**
 * Récupération d'un cocktail
 * @param {number} cid 
 * @returns {Promise}
 */
let getScan = (cid) => {
    return Axios.get('/cocktails/'+cid)
}

/**
 * Ajout d'un cocktail
 * @param {object} cocktail 
 * @returns {Promise}
 */
let addScan = (cocktail) => {
    return Axios.put('/cocktails', cocktail)
}

/**
 * Mise à jour d'un cocktail
 * @param {object} cocktail 
 * @returns {Promise}
 */
let updateScan = (cocktail) => {
    return Axios.patch('/cocktails/'+cocktail.id, cocktail)
}

/**
 * Suppression d'un cocktail
 * @param {number} cid 
 * @returns {Promise}
 */
let deleteScan = (cid) => {
    return Axios.delete('/cocktails/'+cid)
}

// Déclaration des services pour import
export const scanService = {
    getAllScans, getScan, addScan, updateScan, deleteScan
}