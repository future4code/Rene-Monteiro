export const GoToLoginPage = (history)=>{
    history.push("/")
}

export const GoToPostLists = (history)=>{
    history.push("/postlists")
}

export const GoToPostPage = (history, id)=>{
    history.push(`postpage/${id}`)
}

export const GoToRegisterPage = (history)=>{
    history.push("/registerpage")
}