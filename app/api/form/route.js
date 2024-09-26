export async function POST(request) {
    let res = {message: "Invalid Request"}
    const data = await request.formData()
    const name = data.get('name')
    const email = data.get('email')
    const phone = data.get('phone')
    const status = 'ok'
    

    res = {message: "Sent successfully!", name: name, email:email, phone:phone, status:status}

    return Response.json(res)
}