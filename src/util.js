
class AWSDateUtil {
    
    static getCurrentAWSDate()
    {
        const current = new Date();
        return `${current.getFullYear()}-${current.getMonth()}-${current.getDate()}`
    }

    static getAWSTimeStamp()
    {
        return Math.floor(Date.now()/1000);
    }

}


export default AWSDateUtil;