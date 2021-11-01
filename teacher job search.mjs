import request from "request"
import fetch from "node-fetch"

async function get_texas_education_data() {
    let texas_education_jobsearch = await fetch("https://www.workintexas.com/vosnet/Handlers/jobsearch.ashx"), {
        headers: {
            
    let texas_education_json = await texas_education_jobsearch.json()
    return texas_education_json


}
request(options, (error, response) => {
    if (error) throw new Error(error);
    console.log(response.body);
});
export default get_texas_education_data