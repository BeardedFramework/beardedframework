import app from './App'

const port = process.env.APP_PORT || 3000

app.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`server is listening on ${port}`)
})


//"@beardedframework/lumberjack": "file:../bearded-lumberjack",
