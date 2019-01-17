const mailer = require('../misc/mailer')

exports.register = async (req, res) => {
    console.log(req.body)
    const { email } = req.body
    const html = `HI there,
    <br/>
    Thank you for reistering!
    <br/><br/>
    Please Verify your email by Clink
    <br/>
    On the Following page:
    <button type="submit" href="http://www.google.com">Click Me</button>`
    await mailer.sendEmail('admin@madi.com', email, 'Please verify your email', html)
    res.send("Please Verifield email")
}