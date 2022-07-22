const { db } = require('../db')

exports.addForm = (req, res) => {
  console.log('Run form')
  const {
    //accept,  // true
    city, // "Chacarita"
    state, // "CABA"
    date, // "20/10/2020"
    email, // "checchi363@gmail.com"
    name, // "Fernando Checchi"
    porqueMichellob, // "resapuesta a"
    cuandoConsumisCerveza, // "resapuesta b"
  } = req.body

  if (!city || !state || !date || !email || !name || !name || !porqueMichellob || !cuandoConsumisCerveza) {
    console.log('Run ageGate Failed')
    res.status(400).send('Request invalido')
  }

  db.query(
    'INSERT INTO maratonny_michelob_ar SET?',
    {
      name,
      city,
      state,
      date,
      email,
      form_response_a: porqueMichellob,
      form_response_b: cuandoConsumisCerveza
    },
    (err, resultado) => {
      console.log(err)
      if (err) return res.status(400).send(`Hubo un error al crear el Form: ${err}`)
      if (resultado)
        return res.status(200).json({
          success: true,
          city,
          state,
          date,
          email,
          name,
          porqueMichellob,
          cuandoConsumisCerveza
        })
    }
  )
}
