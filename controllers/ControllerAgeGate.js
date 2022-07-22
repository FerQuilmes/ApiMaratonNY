exports.getAgeGate = (req, res) => {
  console.log('Run ageGate')
  const { date_user, age_limit } = req.params
  if (!date_user || !age_limit) {
    console.log('Run ageGate Failed')
    res.status(400).send('Request invalido')
  }
  let hoy = new Date()
  let fechaNacimiento = new Date(date_user)
  let passed = true
  const edadLimite = parseInt(age_limit, 10)
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
  let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
  if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
    edad--
  }
  if (edad < edadLimite) {
    passed = false
  }
  res.status(200).json({
    age: edad,
    age_limit: edadLimite,
    passed,
  })
}
