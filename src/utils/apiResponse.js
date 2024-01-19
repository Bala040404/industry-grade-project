class apiResponse{
    constructor(data,statusCode,message = 'succes'){
        this.data = data;
        this.success = true;
        this.statusCode = statusCode<400;
        this.message = message;
    }
}

export {apiResponse}