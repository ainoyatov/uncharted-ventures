export async function POST(request) {
    let res = {message: "Invalid Request"}
    
    //Form data
    const data = await request.formData()
    const address = data.get('address')
    const city = data.get('city')
    const state = data.get('state')
    const zipcode = data.get('zipcode')
    const name = data.get('name')
    const email = data.get('email')
    const phone = data.get('phone')

    //Form status
    const status = 'ok'
    

    res = {
        message: "Your message has been sent. Thank you.",
        address: address,
        city: city,
        state: state,
        zipcode: zipcode,
        name: name, 
        email:email, 
        phone:phone, 
        status:status
    }

    return Response.json(res)
}
