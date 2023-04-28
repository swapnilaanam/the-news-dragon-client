import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";
import QZone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png';


const RightNav = () => {
    return (
        <div className="mt-4">
            <h4>Login With</h4>
            <div>
                <Button className="mb-2" variant="outline-primary"><FaGoogle /> Login With Google</Button>
                <Button variant="outline-secondary"><FaGithub /> Login With Github</Button>
            </div>
            <div className="mt-4">
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><SiFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><SiTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><SiInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className="text-center position-relative d-flex justify-content-center align-items-center text-white w-100">
                <img src={bg} alt="" className='w-100'/>
                <div className="text-center position-absolute d-flex flex-column justify-content-center w-100 px-5">
                    <h3>Create an Amazing Newspaper</h3>
                    <p className='my-4'>
                        <small>
                            Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                        </small>
                    </p>
                    <Button className="rounded-0" variant="danger">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;