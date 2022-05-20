export const generatePassword = () => {
    const alphabet = [
        'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P',
        'Q','R','S','T','U','V','W','X','Y','Z',
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',
        'q','r','s','t','u','v','w','x','y','z',
        '0','1','2','3','4','5','6','7','8','9',
        '!','"','§','$','&','/','(',')','=','?','#','+','-','_','.',','
    ];

    let passwordString = ""

    const getRandomArbitrary = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        let l = Math.floor(Math.random() * (max - min)) + min;
        for(let i=0; i <= l; i++){
            let c = Math.floor(Math.random()*alphabet.length)
            passwordString += alphabet[c]
            
        }
        return passwordString
      }
      getRandomArbitrary(10, 14)
      return  passwordString
    
}