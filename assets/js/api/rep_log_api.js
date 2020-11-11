function fetchJSON(url, options){
    return fetch(url, Object.assign({
        credentials: 'same-origin'
    }, options))
        .then(checkStatus)
        .then(response => {
            return response.text()
                .then(text => text ? JSON.parse(text) : '');
        });
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 400){
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;

    throw error
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

export function createRepLog(repLog){
    return fetchJSON('/reps', {
        method: 'POST',
        body: JSON.stringify(repLog),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}