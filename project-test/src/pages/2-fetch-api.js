fetch('https://regres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: 'Wesley',
    })
})
    .then((res) => res.json())
    .then((data) => console.log(data))


fetch('https://regres.in/api/users/1')
    .then((res) => {
        console.log(res)
        if (res.ok) {
            console.log('success')
        } else {
            console.log('error')
        }
    })
    .then((data) => console.log(data.data))
    .catch((err) => console.log(err))