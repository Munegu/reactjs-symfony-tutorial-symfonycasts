/**
 * Returns a Promise object with the rep logs data
 *
 * @returns {Promise<Response>}
 */
export function getRepLogs(){
    return fetch('/reps')
        .then(response => {
            return response.json()
        });
}