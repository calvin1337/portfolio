import React, { Component } from 'react';
import {Col} from "react-bootstrap";
import "./blogPost.css"

export class BlogPost extends Component {
    render() {
        return (
            <Col lg="6" className="mt-30">
                <div className="blogPost">
                     <div className="blog-img">
                        <a href="/">
                            <img src="https://picsum.photos/200/300" alt="" />
                         </a>
                        <div className="blog-date">
                            <span className="date">13</span>
                             <span className="month">June</span>
                        </div>
                    </div>
                    <div className="blog-content">
                    <h5>
                        <a href="/">
                            My First Blog Post
                        </a>
                    </h5>
                    </div>
                </div>
            </Col>
        )
    }
}

export default BlogPost
