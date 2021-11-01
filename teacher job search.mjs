import request from "request"
import fetch from "node-fetch"

async function get_texas_education_data() {
    let texas_education_jobsearch = await fetch("https://www.workintexas.com/vosnet/Handlers/jobsearch.ashx"), {
        "headers": {
            'Connection': "keep-alive",
            "Accept": "application/json, text/javascript, */*; q=0.01",
            'X-Requested-With': 'XMLHttpRequest',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36 Edg/88.0.705.74',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Origin': 'https://www.workintexas.com',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Referer': 'https://www.workintexas.com/vosnet/jobbanks/joblist.aspx?enc=91AiPJzms5asTnW2vfcWh8Nb9n04fVG1CBQKwGz3qzej5W6xY35hUVJkmMTsrf1j316uNOfyB+lhJ6mSAXvMCCtMn8zy/i/+B0efnypWEQQNvvBKZu17csoTfC49QL/+Kr0UE7TKtWFoDQOCQZ65DXJXTACO0cfwB+y8mol124eEbSQJBi2cIqE95oM0tvuZi8b+ha7Spm28YZVSOZRN1Q==',
            'Accept-Language': 'en-US,en;q=0.9',
            'Cookie': '__AntiXsrfToken=f5a09fdd2090416d962699ba23621f02; ASPSESSIONIDSUTATSQR=DGILBJEBFGJADLBAJAEIDLMN; ASPSESSIONIDQWRAQSSQ=EEPLBJEBLLEFGPFALALPDLIA; TS01557166=0135fc09d3ac6f775b403c913fd531fca8b7f7142313d15a77bcc5d22d2a73a3b0e2d61be8838539f84fb018862e4d6938129e143e709a8ced4f3947936c5b07fad17d981003b094b617208ffe326a049d20361078403c939debd1b122e46cdca7d2c7a5ec42df2260c4c5c792edb0f63dfe52721bceeef55aa3f31a3d9ea8c5e7bc6aae71; ASP.NET_SessionId=pvoghzubal4blf4ayilbdeii; SID=9b9d53b742d148c18819a54ef94eb22d; GSILB=0733TX-c990704c29564792b03d39d65d2e8f25; ReferringPage=https%3a%2f%2fwww.workintexas.com%2fvosnet%2fjobbanks%2fjoblist.aspx%3fenc%3d91AiPJzms5asTnW2vfcWh8Nb9n04fVG1CBQKwGz3qzej5W6xY35hUVJkmMTsrf1j316uNOfyB+lhJ6mSAXvMCCtMn8zy%2fi%2f+B0efnypWEQQNvvBKZu17csoTfC49QL%2f+Kr0UE7TKtWFoDQOCQZ65DXJXTACO0cfwB+y8mol124eEbSQJBi2cIqE95oM0tvuZi8b+ha7Spm28YZVSOZRN1Q%3d%3d; CurrentPage=%2fvosnet%2fhandlers%2femployer%2femplogo.ashx; TS012261ed=0135fc09d33e1607281427d53305cb4e7b553ee86813d15a77bcc5d22d2a73a3b0e2d61be8838539f84fb018862e4d6938129e143e06fba94ac1a982fb4a9e99e8cedeb74cc9d5b59070a7320f6da5d69f08daaccf4abd12d5ca0327bfa00bd5abcd02b4da506fda7868178b6124e390f0a35907c46aed7201446099c977061b2f42ec8a120dd2f621cfa2e2204ed3109adf6451770c8cf5c210059c895d4b6f75d05cefdb39145da3c64cd6d3f000d0c77edd2ac8; CurrentPage=%2fvosnet%2fHandlers%2fjobsearch.ashx; ReferringPage=https%3a%2f%2fwww.workintexas.com%2fvosnet%2fjobbanks%2fjoblist.aspx%3fenc%3d91AiPJzms5asTnW2vfcWh8Nb9n04fVG1CBQKwGz3qzej5W6xY35hUVJkmMTsrf1j316uNOfyB+lhJ6mSAXvMCCtMn8zy%2fi%2f+B0efnypWEQQNvvBKZu17csoTfC49QL%2f+Kr0UE7TKtWFoDQOCQZ65DXJXTACO0cfwB+y8mol124eEbSQJBi2cIqE95oM0tvuZi8b+ha7Spm28YZVSOZRN1Q%3d%3d; TS012261ed=0135fc09d3bdf8646bbf04dd1534b1f05d19a0703cfe5b72c7addd235fc181c6d5b95fc53dfbea3248249d6e3d7ad67c235f5a51fbc8e08d8b700daf48ea4b9d4e885c64e0b09f9c6b3248f267f9b79be72d96b66d07630a284436915f7d22fade5a04a55285e26c3e905c779ecdb4acd0cc074d430863108a8b18dd40577f970783c3e5fbd20bd60e1fd9872dc75fe2fa389e4f9ae725b597ebe4860e6af1477da3000ac4b0369d4452895ebc2eed4d10f83d6544; TS1d8fb578027=0866627b7bab20004f2e811a683a8b5c12da4a9a4f22406c25817644b1d4302b84c7392fb272770b08335da4a51130005058cdf98ea39fbe54fc1d4ae60b99a092a328e23f1e45ddbf2033f46416e6ac09cdc46fc0c9a066ef2a75b7bf7efd4a'
          },
        body:"cmd=JOBDATA&data=P2VuYz1RSUVEd1FiVkRjRzExY3NidExjd1ZlczhUMUFWcmtRd2JvVVFIQmpRM3lNbmxLZmRIbmVMTjl5bHJ1clBZY2w0eUs5bk9ONEp5T0wyNkE1bnlzdHMxekZaYWJZVXZreW5CZFB4MUhUU2s5ZHJqdU52R3lkVmswbDh4N0E1TVZJZnArUWZZbk5IVHZiaGlLTnZsODNQaDlESTlOQm1PSnRZT2dCdUMrYkI5OU9neElkeHRKQkZIOGtpajQ5czVrWVVRS3MwOGlyL1pUOExMa2xWV0ZmTEJTRVdFa3RjQ2JSQisyVHdncmp3cGlWYXVBZHU2Uk5FM2FVQXN2ZTBHWUNheWNyTVprdHZzR0tFZnRPR00yU0grbGRCREdHMDFiajRMRWlSdmV2amQwOENiS0FVVFd4NTNoZnUyZDJycTBLOVF2NXV3d2dPOHV3dU5mZG9jd1F4RE5hdy9YczAweStPeUFMK1VWcDNzK2tjQjRFOWdDbVZLOVVZVVpRcU9WMWxNdDF0cXNRakg0c1lyeVZ3NTBISGJRMEFwdVFFTExBSFdiRGlwb2R1VysySnVhSGNiSDBhM2l6MVg1aGRpRk5PWVJndG02NnRyZGN0UTlsQUZpUDFHUT09&lang=E&pageInfo%5BfilterChanged%5D=false&pageInfo%5BfilterContent%5D%5B0%5D%5B%5D=sfAdditionalKeyword&pageInfo%5BfilterContent%5D%5B0%5D%5B%5D=&pageInfo%5BpageLen%5D=1000&pageInfo%5Bpage%5D=1&pageInfo%5BsearchChanged%5D=false&pageInfo%5BfilterCleared%5D=false&pageInfo%5Bdata%5D=&pageInfo%5Bsort%5D=Relevance&pageInfo%5BrecordsTotal%5D=804&pageInfo%5BsupportsDistance%5D=false&pageInfo%5BuseStorage%5D=true&pageInfo%5BuseBaseSearch%5D=false&pageInfo%5BrecordsFiltered%5D=804&pageInfo%5Bkeyword%5D=STEM&params%5Bkeyword%5D=director&params%5Blocation%5D=TX&params%5Bocccode%5D=25"
        
        }
    let texas_education_json = await texas_education_jobsearch.json()
    return texas_education_json


}
export default get_texas_education_data