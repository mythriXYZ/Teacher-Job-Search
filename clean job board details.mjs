import get_job_board_data from "./get job board data director.mjs"
import fs from "fs"

let job_data = await get_job_board_data()
console.log(job_data)
