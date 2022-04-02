
class AWSDateUtil {
    
    static getCurrentAWSDate()
    {
        const current = new Date();
        var day = String(current.getDate()).padStart(2, '0');
        var mon = String(current.getMonth() + 1).padStart(2, '0'); 
        var year = current.getFullYear();

        return `${year}-${mon}-${day}Z`
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