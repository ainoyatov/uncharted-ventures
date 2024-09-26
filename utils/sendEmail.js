
export async function sendEmail(data) {
    
    const push = await fetch('/api/email', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({data})
    })
}