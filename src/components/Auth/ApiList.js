const BackendUrl = 'http://192.168.29.66:8000'  // Local
// const BackendUrl = 'http://live.framework-futuristic.com:8080' //Live

export default function ApiList() {

    let baseUrl = BackendUrl;



    // let token = window?.localStorage.getItem('userData')
    let token = "";
    const header = {
        headers:
        {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        }
    }

    // window.sessionStorage.setItem("name", "Raja Ram Mohan Malvia")

    let apiList = {
        header: header,

        api_login: `${baseUrl}/api/auth/login`,
        api_logout: `${baseUrl}/api/auth/logout`,

    }

    return apiList
}