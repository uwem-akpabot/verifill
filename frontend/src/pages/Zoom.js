import { ZoomMtg } from '@zoomus/websdk';
import React, { useEffect } from 'react';

const crypto = require('crypto')

function generateSignature(apiKey, apiSecret, meetingNumber, role){
    return new Promise((res, rej) => {
        //prevent time sync issue btw client signature and zoom
        const timestamp = new Date().getTime() - 30000
        const msg = Buffer.from(apiKey + meetingNumber + timestamp + role).toString('base64');
        const hash = crypto.createHmac('sha256', apiSecret).update(msg).digest('base64');
        const signature = Buffer.from(`${apiKey}.${meetingNumber}.${timestamp}.${role}.${hash}`).toString('base64');

        res(signature);
    });
}

var apiKey = '5aLxDzpTTzaXiblQP_9Msw';
var apiSecret = 'SLl4GznVfK14RUxIT9rs3zP6KcbDtZdl0dGf';
var meetingNumber = 83152980112;
var leaveUrl = 'http://localhost:3000'; //redirect url
var userName = 'WebSDK';
var userEmail = 'akpabot.it@gmail.com';
var passWord = '9TXgyW';

var signature = '';
generateSignature(apiKey, apiSecret, meetingNumber, 0).then((res) => {
    signature = res;
}); //need to generate based on meeting id - role = 0 for javascript

const Zoom = () => {
    // loading zoom libraries before joining on component did mount
    useEffect(() => {
        showZoomDiv();
        ZoomMtg.setZoomJSLib("https://source.zoom.us/1.9.0/lib", "/av");
        // ZoomMtg.setZoomJSLib("node_modules/@zoomus/websdk/dist/lib", "/av");
        ZoomMtg.preLoadWasm();
        ZoomMtg.prepareJssdk();
        initiateMeeting();
    }, []);
    
    const showZoomDiv = () => {
        document.getElementById('zmmtg-root').style.display = 'block';
    }

    const initiateMeeting = () => {
        ZoomMtg.init({
            leaveUrl: leaveUrl,
            isSupportAV: true,
            success: (success) => {
              console.log(success)
          
              ZoomMtg.join({
                signature: signature,
                meetingNumber: meetingNumber,
                userName: userName,
                apiKey: apiKey,
                userEmail: userEmail,
                passWord: passWord,
                success: (success) => {
                  console.log(success)
                },
                error: (error) => {
                  console.log(error)
                }
              })
          
            },
            error: (error) => {
              console.log(error)
            }
        })
    };

    return (
        <div>Zoom</div>
    )
}

export default Zoom;
