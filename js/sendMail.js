var sendEmail = function(subject, body) {
    to = encodeURIComponent('miletic.luka777@gmail.com')
    subject = encodeURIComponent(subject)
    body = encodeURIComponent(body)
    const emailUrl = `https://mail.google.com/mail?view=cm&to=${to}&su=${subject}&body=${body}`
    window.open(emailUrl, '_blank')
}