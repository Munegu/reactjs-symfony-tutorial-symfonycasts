function fetchJSON(url, options){
    let headers =  {
        'Content-Type': 'application/json'
    };

    if (options && options.headers) {
        headers = {...options.headers, ...headers};

        delete options.headers;
    }

    return fetch(url, Object.assign({
        credentials: 'same-origin',
        headers:headers
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
    })
}