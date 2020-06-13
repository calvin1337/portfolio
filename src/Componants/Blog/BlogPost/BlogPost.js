import React, { Component } from 'react';
import {Col} from "react-bootstrap";
import {Link } from "react-router-dom"
import "./blogPost.css"

export class BlogPost extends Component {
    render() {
        return (
            <Col lg="6" className="mt-30">
                <div className="blogPost">
                     <div className="blog-img">
                        <Link to={`/blog/${this.props.postID}`}>
                            <img src="https://picsum.photos/200/300" alt="" />
                         </Link>
                        <div className="blog-date">
                            <span className="date">13</span>
                             <span className="month">June</span>
                        </div>
                    </div>
                    <div className="blog-content">
                    <h5>
                        <Link to={`/blog/${this.props.postID}`} >
                            My First Blog Post
                        </Link>
                    </h5>
                    </div>
                </div>
            </Col>
        )
    }
}

export default BlogPost
