const backendDomain = "http://localhost:8080"

const SummaryApi = {
    signUP : {
        url : 'http://localhost:8080/api/signup',
        method : "post"
    },
    signIn :{
        url : '​http://localhost:8080/api/signin',
        method : "post"
    },
    current_user : {
        url : '​http://localhost:8080/api/user-details',
        method : "get"
    }
}

export default SummaryApi