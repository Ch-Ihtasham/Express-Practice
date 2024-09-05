require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubData = {
    "login": "Ch-Ihtasham",
    "id": 143878087,
    "node_id": "U_kgDOCJNnxw",
    "avatar_url": "https://avatars.githubusercontent.com/u/143878087?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Ch-Ihtasham",
    "html_url": "https://github.com/Ch-Ihtasham",
    "followers_url": "https://api.github.com/users/Ch-Ihtasham/followers",
    "following_url": "https://api.github.com/users/Ch-Ihtasham/following{/other_user}",
    "gists_url": "https://api.github.com/users/Ch-Ihtasham/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Ch-Ihtasham/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Ch-Ihtasham/subscriptions",
    "organizations_url": "https://api.github.com/users/Ch-Ihtasham/orgs",
    "repos_url": "https://api.github.com/users/Ch-Ihtasham/repos",
    "events_url": "https://api.github.com/users/Ch-Ihtasham/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Ch-Ihtasham/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Ch Ihtasham",
    "company": "Ceo at QuilCoders",
    "blog": "",
    "location": "Faisalabad,Punjab,Pakistan",
    "email": null,
    "hireable": null,
    "bio": "Mern Stack Developer",
    "twitter_username": null,
    "public_repos": 12,
    "public_gists": 0,
    "followers": 2,
    "following": 3,
    "created_at": "2023-09-02T10:38:17Z",
    "updated_at": "2024-08-08T11:11:01Z"
}
app.get('/', function (req, res) {
    res.send('Hello World')
})
app.get('/login', (req, res) => {
    res.send('this is login page')
})
app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`app run no this port${process.env.PORT}`)
})
// app.listen(3000) 