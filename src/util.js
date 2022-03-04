
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

    static getStartOfDayAsTimeStamp()
    {
        const current = new Date();
        const day_start = new Date(current.getFullYear(),current.getMonth(), current.getDate(),0,0,0);
        return Math.floor(day_start.getTime()/1000);
    }

    static getEndOfDayAsTimeStamp()
    {
        const current = new Date();
        const day_start = new Date(current.getFullYear(),current.getMonth(), current.getDate(),23,59,59);
        return Math.floor(day_start.getTime()/1000);
    }

}


export default AWSDateUtil;