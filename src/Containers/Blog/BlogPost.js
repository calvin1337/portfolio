import React, { Component } from 'react'
import {Container} from "react-bootstrap";

export class BlogPost extends Component {
    render() {
        return (
            <div className="blog-details content-section padding-bottom-120">
                <Container>
                    <p>
                    <img src="https://picsum.photos/200/300" alt="" />
                    </p>
                    <h3>Markdown & HTML supported blog.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid veritatis vero deleniti blanditiis inventore, quae culpa veniam est nam obcaecati qui quidem itaque aspernatur fugit reiciendis rerum! Deleniti, asperiores harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dicta? Consectetur itaque ipsam facilis sequi quisquam dolor, sunt unde quam.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo molestiae aliquid voluptatibus repellendus vel enim repellat natus consequatur quam inventore.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias excepturi consequatur culpa amet nihil minima enim quod placeat veritatis? Sint ipsam iusto reiciendis ducimus dicta rerum repudiandae corrupti quae tempora?</p>
                </Container>
            </div> 
        )
    }
}

export default BlogPost
