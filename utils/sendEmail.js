
export async function sendEmail(data) {
    
    const push = await fetch('http://localhost:3000/api/email', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({data})
    })
}