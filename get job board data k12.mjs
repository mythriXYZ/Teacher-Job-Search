import fetch from "node-fetch"

async function get_job_board_data() {
    let teacher_job_data = await fetch("https://api.k12jobspot.com/api/Jobs/Search", {
        "headers": {
            'authority': 'api.k12jobspot.com',
            'accept': 'application/json, text/plain, */*',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36 Edg/88.0.705.74',
            'content-type': 'application/json;charset=UTF-8',
            'origin': 'https://www.k12jobspot.com',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'referer': 'https://www.k12jobspot.com/',
            'accept-language': 'en-US,en;q=0.9',
            'Cookie': 'incap_ses_1340_2502568=275yOpkOgV/OzGsDMaOYEsNJgGEAAAAA4ojcziA9rB+//T5mztd4pw==; nlbi_2502568=1Q9OCzPFMg2GV1JEhPOsnwAAAAA9gEs5gMk+sV01EL/jLQn3; visid_incap_2502568=wpWPGimBRg2VWyirVYANyZBJgGEAAAAAQUIPAAAAAABx13JpYXy3cI1HrCnyluDp'
        },
        body: '{"searchPhrase":"innovation","filters":[{"name":"positionAreas","filters":[]},{"name":"gradeLevels","filters":[]},{"name":"jobTypes","filters":[]}],"pageStartIndex":1,"pageEndIndex":1000}',
        "method": "POST"


    },




    )
    let teacher_job_data_json = await teacher_job_data.json()
    return teacher_job_data_json
}
export default get_job_board_data
