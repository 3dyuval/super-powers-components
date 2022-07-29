import React from 'react'
import { StyledBox } from '../Globals'
import { Card, FlexRow } from '../Globals'

const NewsArticle = ({ header, title, text }) => {

    return (
        <Card>
            <FlexRow>
                <h3>{title}</h3>
                <p>{header.timestamp}</p>
            </FlexRow>
            <main>{text}</main>
        </Card>
    )
}

export const NewsArticleList = ({ news = [] }) => {

    return (
        (news && news.length > 0) ?
            news.map(article =>
                <NewsArticle header={article.header} title={article.body.title} text={article.body.text} />
            )
            : 'Old news...'
    )
}

export { NewsArticle as News }