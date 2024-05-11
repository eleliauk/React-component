
interface FormProps{
    name?:string,
    //所有的键都是字符串，但所有的值都是any类
    initialValue?:Record<string, any>
    onFinish?:((values: Record<string, any>) => void),
    // onFinshFailed?:((values: Record<string, any>, errors: Record<string, ValidateError[]>) => void)
}