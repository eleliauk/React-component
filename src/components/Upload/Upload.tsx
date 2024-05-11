import React from "react";
export interface UploadFile {
    name?: string;
    uid?: string;
    status?: string;
    url?: string;
    percent?: number;
    rawFile?: File;
}
interface OnChangeEvent {
    file: UploadFile;
    fileList?: UploadFile[];
}
interface UploadProps {
    accept?: string;
    fileList?: UploadFile[];
    onChange?:(e:OnChangeEvent)=>void
    beforeUpload?: (fileList: File[]) => File[] | Promise<File[]> | boolean;
}
const Upload:React.FC<UploadProps>=(props)=>{
    const {
       accept
    }=props
    // const [internalFileList, setInternalFileList] = useState([]);
    return(
        <input type="file" accept={accept}/>
    )

}
export default Upload
