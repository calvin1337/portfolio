import React, { Component } from 'react';
import {Container, Row} from "react-bootstrap";
import BlogPost from '../../Componants/Blog/BlogPost/BlogPost';
import Blogimage from "../../images/coffee-desktop.jpg"


export class Blog extends Component {
    render() {
        return (
            <div className="blog-section content-section">
                <Container>
                    <div className="sectionTitle">
                        <h2>Recent Blogs</h2>
                        <span>Recent Blogs</span>         
                    </div>
                    <Row className="mt-30-reverse">
                        <BlogPost image={Blogimage} postID="firstpost"/>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Blog
