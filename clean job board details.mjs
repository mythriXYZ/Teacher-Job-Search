import get_job_board_data from "./get job board data.mjs"
import fs from "fs"

let job_data = await get_job_board_data()
job_data = job_data["jobs"]
console.log(job_data)
