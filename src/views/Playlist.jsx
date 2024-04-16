import React from "react";
import styled from "styled-components";
import data from '../data/videoData.json';
import moment from 'moment';
import Chip from "../component/Chip";
import Card from "../component/Card";

const Categories = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 10px;
    background-color: #AF0404;
`;

const VideoList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
    background-color: #414141;
`;

const VideoContent = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    color: #ccc;
`;

const Span = styled.span`
    margin-right: 10px;
`;

export default function Videos(props) {
    return (
        <div>
            <Categories>
                <Chip>All</Chip>
                <Chip>Electronics</Chip>
                <Chip>Computers</Chip>
                <Chip>Mechanics</Chip>
                <Chip>Aeronautics</Chip>
                <Chip>Metallurgy</Chip>
            </Categories>
            <VideoList>
                {data.items.map((post, index) => {
                    return (
                        <Card 
                            key={index}
                            src={post.snippet.thumbnails.standard.url} 
                            alt={post.snippet.title} 
                            title={post.snippet.title}
                            subtitle={post.snippet.channelTitle}
                        >
                            <div>
                                <VideoContent>
                                    <Span>{post.statistics.viewCount} Views</Span>
                                    <Span>{moment(post.snippet.publishedAt).fromNow()}</Span>
                                </VideoContent>
                            </div>
                        </Card>
                    )
                })}
            </VideoList>
        </div>
    )
}
