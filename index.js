const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('Hello Word')
})

app.get('/getname', (req, res) => {
    res.send('chayanin pinjungern')
})

app.get('/getprofile', (req, res) => {
    let data ={
        name: ' chayanin pinjungern',
        age: 19,
        apocalypse: 'Belive the Impossible is Possible.',
        detial: 'More 2 years ago i am study at rajinibon'
    }
    res.send(data)
})

app.get('/getabout', (req, res) => {
    let data ={
        name: 'chayanin pinjungern',
        age: 19,
        email: 'chayanin.pinj@bumail.net.',
        address: 'pathumtani'
    }
    res.send(data)
})

app.get('/getproject', (req, res) => {
    let data ={
        project_name: 'chayanin',
        project_description: 'yeh yeh yeh',
        project_link: '-'
    }
    res.send(data)
})

app.get('/getcontact', (req, res) => {
    let data = {
        address: 'pathumtani',
        emial: 'chayanin.pinj@bumail.net',
        phone_number: '085-596-8245'
    }
    res.send(data)
}) 
app.listen(3000, () => {
    console.log('Start server at port 3000.')
})
