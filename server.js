const app = require('./lib/app')

const PORT = 2309

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port ${PORT}.`)
})
