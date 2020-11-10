function fetchJSON(url, options){
    return fetch(url, Object.assign({
        credentials: 'same-origin'
    }, options))
        .then(response => {
            return response.json();
        });
}

/**
 * Returns a Promise object with the rep logs data
 *
 * @returns {Promise<Response>}
 */
export function getRepLogs(){
    return fetchJSON('/reps')
        .then(data => data.items);
}

/**
 *
 * @param id
 * @returns {Promise<Response>}
 */
export function deleteReplog(id) {
    return fetchJSON(`/reps/${id}`, {
        method: 'DELETE'
    })
}