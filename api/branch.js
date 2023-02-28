import express from 'express'
import {createClient} from '@supabase/supabase-js'
import bodyparse from 'body-parser'
const app = express()

const supabase = createClient(
    'https://eatedutmtsumaytqgpbz.supabase.co',
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhdGVkdXRtdHN1bWF5dHFncGJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1NzI1ODgsImV4cCI6MTk5MzE0ODU4OH0.BYbZH98or0Mxdwx2-8h30grUpxnvDNxNcmCz3Jv-oGk'
);
app.use(bodyparse.json())
app.use(
    bodyparse.urlencoded({
        extended: true,
    })
)

export default async function search(req, res) {
    // client.query(`Select * from bank_branch where LOWER(branch) like '%${req.query.q.toLowerCase()}%' or lower(address) like '%${req.query.q.toLowerCase()}%' or LOWER(city) like '%${req.query.q.toLowerCase()}%' or LOWER(district) like '%${req.query.q.toLowerCase()}%' or LOWER(states) like '%${req.query.q.toLowerCase()}%' or LOWER(bank_name) like '%${req.query.q.toLowerCase()}%' order by ifsc  limit ${req.query.limit} offset ${req.query.offset}`, (err, result)=>{
    //     if(!err){
    //         res.send(result.rows);
    //     }
        
    // });
    // client.end;
    console.log("hi")
        const {data, error} = await supabase
            .from('Bank')
            .select()
.or(`branch.ilike.%${req.query.q.toLowerCase()}%`)
            .order('ifsc',{ascending:false})
.range(parseInt(req.query.offset),parseInt(req.query.offset)+parseInt(req.query.limit)-1)
        res.send(data)
}




// app.get('/api/branch', async(req, res) => {
//     const {data , error} = await supabase
//     .from('Bank')
//     .select()
//     .or('')
// })

//      client.query(`Select * from bank_branch where LOWER(branch) ='${req.query.q.toLowerCase()}'order by ifsc desc limit ${req.query.limit} offset ${req.query.offset}`, (err, result)=>{
//         if(!err){
//             res.send(result.rows);
//         }
        
//     });

// })
