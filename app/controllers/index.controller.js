exports.render = (req, res) => {
    const title = 'Email Verification'

    res.render('index', {
        'title': title
    })
}