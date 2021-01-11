import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { getUrl, } from '../lib/Utils.js';
import './Info.css';
import {
    FacebookShareButton, FacebookIcon,
    EmailShareButton, EmailIcon,
    TwitterShareButton, TwitterIcon,
    LinkedinShareButton, LinkedinIcon,
    WhatsappShareButton, WhatsappIcon,
    TelegramShareButton, TelegramIcon
} from "react-share";


export default class Info extends Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false,
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ show: nextProps.show });
    }
    render() {
        const { InfoClose } = this.props;
        let handleClose = () => {
            this.setState({
                show: false
            });
            InfoClose();
        }
        let url = "http://" + getUrl() +"/Depth3DViewer";
        let quote = ""
        let hashtag = "3d,depth"
        let title = "Depth3DViewer"


        return <div>
            <Modal
                show={this.state.show}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={handleClose}
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Depth3DViewer
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col lg={12} className="info">
                            <p>Depth3DViewer test app</p>
                            <h2>Description</h2>
                            <p>ssss</p>
                            <h2>Process:</h2>
                            <ul>
                                <li>item 1</li>
                                
                            </ul>
                            Sourcecode in <a href="https://github.com/alexwing/" rel="noreferrer nofollow" target="_BLANK">Github</a> 
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} className="share">
                            <h4>Share</h4>
                            <EmailShareButton url={url} subject={title} body={quote} >
                                <EmailIcon size={48} round={true} />
                            </EmailShareButton>
                            <FacebookShareButton url={url} quote={quote} hashtag={hashtag}>
                                <FacebookIcon size={48} round={true} />
                            </FacebookShareButton>
                            <TwitterShareButton url={url} title={quote} hashtags={hashtag.split(',')}>
                                <TwitterIcon size={48} round={true} />
                            </TwitterShareButton>
                            <LinkedinShareButton url={url} title={title + " - " + this.props.name} summary={quote} source={title}>
                                <LinkedinIcon size={48} round={true} />
                            </LinkedinShareButton>
                            <WhatsappShareButton url={url} title={quote} >
                                <WhatsappIcon size={48} round={true} />
                            </WhatsappShareButton>
                            <TelegramShareButton url={url} title={quote} >
                                <TelegramIcon size={48} round={true} />
                            </TelegramShareButton>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Ok</Button>
                </Modal.Footer>
            </Modal>
        </div>
    }

}