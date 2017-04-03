import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';


class Single extends Component {
    render() {
        const { postId } = this.props.params;

        const i = this.props.posts.findIndex((post) => post.code === postId);
        const posts = this.props.posts[i];

        const postComments = this.props.comments[postId] || [];



        return (
            <div className="single-photo">
                <Photo i={i} post={posts} {...this.props} />
                <Comments postComments={postComments} {...this.props} />
            </div>

        )
    }
}

export default Single;