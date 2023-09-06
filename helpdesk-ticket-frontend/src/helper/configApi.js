import axios from 'axios'

const configApi = async (method, path,data) => {

    const apiBackend = 'http://localhost:5000/admin/'
    const url = `${apiBackend}${path}`

    switch(method){
        case 'get' : return await getMethod(method,url)
        case 'post' : return await postMethod(method,url)
        case 'put' : return await putMethod(method,url)
        default : break;
    }
}

const getMethod = async (method, url) => {
    const res = await axios({
        method , url
    })
    try{
        return res.data
    }
    catch(err){
        console.log(res.status,err);
    }
}

const postMethod = async (method, url, data) => {
    const res = await axios({
        method , url, data
    })
    try{
        return res.data
    }
    catch(err){
        console.log(res.status,err);
    }
}

const putMethod = async (method, url, data) => {
    const res = await axios({
        method , url, data
    })
    try{
        return res.data
    }
    catch(err){
        console.log(res.status,err);
    }
}

export default configApi