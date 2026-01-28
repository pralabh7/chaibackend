require('dotenv').config()
console.log("Hello, Pralabh");
console.log("port is: ",process.env.PORT)
const express = require('express')
const app = express()
const port = process.env.PORT

const gitapi={
  "login": "pralabh7",
  "id": 194781814,
  "node_id": "U_kgDOC5widg",
  "avatar_url": "https://avatars.githubusercontent.com/u/194781814?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/pralabh7",
  "html_url": "https://github.com/pralabh7",
  "followers_url": "https://api.github.com/users/pralabh7/followers",
  "following_url": "https://api.github.com/users/pralabh7/following{/other_user}",
  "gists_url": "https://api.github.com/users/pralabh7/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/pralabh7/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/pralabh7/subscriptions",
  "organizations_url": "https://api.github.com/users/pralabh7/orgs",
  "repos_url": "https://api.github.com/users/pralabh7/repos",
  "events_url": "https://api.github.com/users/pralabh7/events{/privacy}",
  "received_events_url": "https://api.github.com/users/pralabh7/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-01-13T10:31:19Z",
  "updated_at": "2026-01-28T14:13:36Z"
}
app.get('/', (req, res) => {
  res.send('Hello!')
})

app.get('/instagram', (req,res)=>{
    res.send("herr_pralabh_07")
})
app.get('/facebook', (req,res)=>{
    res.send('Pralabh Mishra ')
})
app.get('/youtube' , (req,res)=>{
    res.send('<h1> Vibe with Pralabh </h1>')
})
app.get('/github',(req,res)=>{
    res.json(gitapi)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
