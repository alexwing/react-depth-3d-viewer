import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

//import { getUrl, } from '../lib/Utils.js';
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
        let url = "http://mappuzzle.xyz/depth3dviewer/";
        let quote = "Pseudo 3D photo viewer from a depth layer for React using pixi.js"
        let hashtag = "3d,depth"
        let title = "Depth3DViewer"

        const Puzzles = (
            <Table striped bordered size="sm" className="legendInfo">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Credits</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.content.map(c =>
                    (
                        <tr key={c.id} id={c.id}>
                            <td width="30%">{c.name}</td>
                            <td width="50%">{c.comment}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
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
                            <h2>Description</h2>
                            <p>Pseudo 3D photo viewer from a depth layer for React using pixi.js</p>
                            <p>In 3D computer graphics and computer vision, a depth map is an image or image channel that contains information relating to the distance of the surfaces of scene objects from a viewpoint. The depth map applied to a texture as a displacement filter can achieve a 3d effect, other implementations such as Facebook also allow interpolation of the non visible areas of the texture when moving in 3D.</p>
                            <h2>Credits</h2>
                            {Puzzles}
                            Sourcecode in <a href="https://github.com/alexwing/react-depth-3d-viewer/" rel="noreferrer nofollow" target="_BLANK">Github</a> 
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
                            <LinkedinShareButton url={url} title={title} summary={quote} source={title}>
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