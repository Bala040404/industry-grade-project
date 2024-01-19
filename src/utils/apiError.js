class apiError extends Error{
    constructor(error=[],statusCode,message="something went wrong",stack=""){
        super(message);
        this.error = error;
        this.statusCode = statusCode;
        this.data = null;
        this.success = false;
        
        if(stack){
        this.stack = stack;
        }
    }
}

export {apiError}