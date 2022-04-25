import emailjs from '@emailjs/browser'
import React, { useEffect, useState } from "react";

import * as queries from '../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';

export default function ContactForm() {

    // declaring react hooks
    const [name, setName] = useState("");
    const [userid, setUserID] = useState();

    // function to store the userID in state so that it can be used in API calls
    // not using this function because accessing the userID directly from the session storage

    // function storeUserID(){
    //     // fetching current user from session storage
    //     const userID = sessionStorage.getItem('userID');
    //     console.log("[updateUser]");
    //     console.log(userID);

    //     setUserID(userID);
    //     console.log("[storeUserId] value from state")
    //     console.log(userid);
    // }

    // this function is just used to fetch the full name of the sender or the person who's inviting the partner
    const getFromName = async () => {
        const user = await API.graphql({ query: queries.getUser , variables: { id : sessionStorage.getItem('userID') }});
        console.log("[getFromName]");
        console.log(user.data.getUser.fname);
        var fetchedFullName = user.data.getUser.fname + " " + user.data.getUser.lname
        setName(fetchedFullName);
        console.log("[getAnswer]");
        console.log(name);
      };


    // useEffect is just like compoenent did mount for function based component
    useEffect(() => {
        // storeUserID();
        getFromName();
    }, []);


    // this is the function which will be called when the submit button is pressed
    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_h2hbmqw', 'template_ow5b9ms', e.target, 'F1-CVdkIHCr6O5tx5')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div>
            <div className="container">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="hidden" className="form-control" placeholder="Name" name="from_name" value={name}/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}