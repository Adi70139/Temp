import React, { MouseEventHandler, useEffect, useState } from 'react';
import { postMailMessages } from '../Actions/Action';
import { ChevronDown, Eye, Reply, X, Zap } from 'lucide-react';

const SendReply = ({ currColor, handleCancel, singleMail }) => {
    const [formData, setFormData] = useState({
        toName: "",
        to: "",
        from: "",
        fromName: "",
        subject: "",
        body: ""
    });

    useEffect(() => {
        const token = localStorage.getItem("reachinbox-auth");
        
        setFormData({
            ...formData,
            toName: singleMail.toName,
            fromName: singleMail.fromEmail,
            to: singleMail.toEmail,
            from: singleMail.fromEmail
        });
    }, [singleMail]);

    const handleSubmit = () => {
        console.log(formData, "data");
        postMailMessages(singleMail.threadId, formData)
            .then(() => alert("Reply has been sent"))
            .catch(err => console.log(err));
    };

    return (
        <div className='flex flex-col w-full h-full'>
            <div>
                <div className={`h-10 flex justify-between px-8 py-2 text-[16px] ${currColor ? 'bg-[#23272C]' : 'bg-white'}`}>
                    <p>Reply</p>
                    <p onClick={handleCancel} className='cursor-pointer'><X /></p>
                </div>
                <hr className='border-t border-gray-700' />
                <div className={`text-[12px] h-10 flex pt-2 px-8 py-2 h-7 items-center gap-2`}>
                    <p className='text-gray-400'>To :- </p>
                    <input
                        type="text"
                        placeholder=''
                        value={formData.to}
                        className={`${currColor ? 'bg-[#141517]' : "bg-white"} outline-none`}
                        onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                    />
                </div>
                <hr className='border-t border-gray-700' />
                <div className={`text-[12px] h-10 flex pt-2 px-8 py-2 h-7 items-center gap-2`}>
                    <p className='text-gray-400'>From :- </p>
                    <input
                        type="text"
                        placeholder=''
                        value={formData.from}
                        className={`${currColor ? 'bg-[#141517]' : "bg-white"} outline-none`}
                        onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                    />
                </div>
                <hr className='border-t border-gray-700' />
                <div className={`text-[12px] h-10 flex pt-2 px-8 py-2 h-7 items-center gap-2`}>
                    <p className='text-gray-400'>Subject :- </p>
                    <input
                        type="text"
                        placeholder=''
                        value={formData.subject}
                        className={`${currColor ? 'bg-[#141517]' : "bg-white"} outline-none`}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                </div>
                <hr className='border-t border-gray-700' />
                <div className={`text-[12px] p-2 text-left`}>
                    <textarea
                        placeholder='Hello John...'
                        value={formData.body}
                        className={`ml-6 h-[250px] w-[500px] outline-none ${currColor ? 'bg-[#141517]' : 'bg-white'}`}
                        onChange={(e) => setFormData({ ...formData, body: e.target.value })}
                    />
                </div>
            </div>
            <div className='h-[54px] w-full'>
                <hr className='border-t border-gray-700 mb-2' />
                <div className='flex text-[12px] gap-1'>
                    <div className='w-[100px] h-8 bg-[#4B63DD] flex items-center ml-4 mb-3 rounded gap-1 flex justify-center gap-2 cursor-pointer items-center'>
                        <button className='text-white' onClick={handleSubmit}>Send</button>
                        <ChevronDown color={"white"} />
                    </div>
                    <div className='w-[100px] h-8 flex items-center mb-3 rounded gap-1 flex justify-center cursor-pointer items-center'>
                        <Zap className='h-4' />
                        <button>Variables</button>
                    </div>
                    <div className='w-[120px] h-8 flex items-center mb-3 rounded gap-1 flex justify-center cursor-pointer items-center'>
                        <Eye className='h-4' />
                        <button>Preview Email</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendReply;
