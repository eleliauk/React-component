import React, {ChangeEvent, useRef, useState} from "react";
import axios from 'axios'
import UploadList from "./uploadList.tsx";
import Dragger from "./Dragger.tsx";
import "./_style.scss"
export type UploadFileStatus = 'ready'| 'uploading' | 'success' | 'error'

export interface UploadFile {
    uid: string;
    size: number;
    name:string;
    status?: UploadFileStatus;
    percent?: number;
    raw?: File;
    response?: File;
    error?: never;
}
export interface UploadProps {
    action: string;
    headers?: {[key: string]:never};
    name?: string;
    data?: {[key: string]:never};
    withCredentials?: boolean;
    drag?: boolean;
    defaultUploadFileList?: UploadFile[];
    beforeUpload?: (file: File) => boolean | Promise<File>
    onProgress?: (percentage: number, file: File) => void;
    onSuccess?: (data: never, file:File) => void;
    onError?: (err:unknown, file:File) => void;
    onChange?: (file: File) => void;
    onRemove?: (file: UploadFile) => void;
    accept?: string;
    multiple?: boolean;
    children?: React.ReactNode
}
export const Upload: React.FC<UploadProps> = (props) => {
    const {
        action,
        defaultUploadFileList,
        beforeUpload,
        onProgress,
        onSuccess,
        onError,
        onChange,
        onRemove,
        name,
        data,
        headers,
        withCredentials,
        accept,
        multiple,
        drag,
        children
    } = props
    const fileInput = useRef<HTMLInputElement>(null)
    const [fileList, setfileList] = useState<UploadFile[]>(defaultUploadFileList || [])
    const updateFileList = (updateFile: UploadFile, updateObj: Partial<UploadFile>) => {
        setfileList(prevList => {
            return prevList.map(file => {
                if (file.uid === updateFile.uid) {
                    return {...file, ...updateObj}
                } else {
                    return file
                }
            })
        })
    }
    const handleClick = () => {
        if(fileInput.current)
            fileInput.current.click()
    }
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if(!files) {
            return
        }
        UploadFiles(files)
        if(fileInput.current) {
            fileInput.current.value = ''
        }
    }

    const handleRemove = (file:UploadFile) => {
        setfileList((prevList)=>{
            return prevList.filter(item=>item.uid !== file.uid)
        })
        if (onRemove) {
            onRemove(file)
        }
    }
    const UploadFiles = (files: FileList, test?: boolean) => {
        const postFiles = Array.from(files)
        if (test) {
            console.log('drag', postFiles[0])
        }
        postFiles.forEach(file => {
            if (!beforeUpload) {
                post(file)
            } else {
                const result = beforeUpload(file)
                if (result && result instanceof Promise) {
                    result.then(processedFile => {
                        post(processedFile)
                    })
                } else if (result !== false) {
                    post(file)
                }
            }
        })
    }


    const post = (file: File) => {
        const _file: UploadFile = {
            uid: Date.now() + 'upload-file',
            status: 'ready',
            name: file.name,
            size: file.size,
            percent:0,
            raw: file
        }
        setfileList((prevList)=>[_file,...prevList])
        const formData = new FormData()
        formData.append(name || 'file', file)
        if(data) {
            Object.keys(data).forEach(key => {
                formData.append(key, data[key])
            })
        }
        axios.post(action, formData, {
            headers: {
                ...headers,
                'Content-Type': 'multipart/formdata'
            },
            withCredentials,
            onUploadProgress: (e) => {

                const percentage = Math.round((e.loaded*100)/(e.total?e.total:100)) || 0
                // console.log(percentage);

                if(percentage < 100) {
                    updateFileList(_file, {percent: percentage, status: "uploading"})

                    if(onProgress) {
                        onProgress(percentage, file)
                    }
                }
            }
        }).then(res => {
            console.log(res);
            updateFileList(_file, {status:'success', response:res.data})
            if(onSuccess) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
               // @ts-expect-error
                onSuccess(res.data, file)
            }
            if(onChange) {
                onChange(file)
            }
        }).catch(err => {
            console.error('err:',err);
            updateFileList(_file, {status:'error', response:err.data})
            if (onError) {
                onError(err.data, file)
            }
            if(onChange) {
                onChange(file)
            }
        })
    }
    console.log(fileList);

    return(
        <div className="upload-component">
            {/*<Button type= onClick={handleClick} >Upload File</Button>*/}
            <div className="upload-input" style={{display: 'inline-block'}} onClick={handleClick}></div>
            {
                drag? (
                    <Dragger onFile={(files: FileList) => {UploadFiles(files, true)}}>
                        {children}
                    </Dragger>
                ):children
            }
            <input
                accept={accept}
                multiple = {multiple}
                className="file-input"
                style={{display:'none'}}
                ref={fileInput}
                type='file'
                onChange={handleFileChange}>
            </input>
            <UploadList fileList={fileList} onRemove={handleRemove}></UploadList>
        </div>
    )
}
export default Upload