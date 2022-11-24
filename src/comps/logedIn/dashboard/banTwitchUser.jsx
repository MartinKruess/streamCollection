import { fetchURL } from "../../../App"

export const banTwitchUser = async ( bannedUser, loginToken ) => {
    const response = await fetch(`${fetchURL}/dashboard/banTwitchUser`,
    {
      method: "post",

      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authToken': loginToken,
      },
      body: JSON.stringify(bannedUser)
    })
  const data = await response.json()
  console.log("BannedUser", bannedUser)
}

