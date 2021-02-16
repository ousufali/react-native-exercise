import React from 'react';
import { render } from '@testing-library/react-native';
import { RepositoryListContainer } from '../components/RepositoryList';

describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
        it('renders repository information correctly', () => {
            const repositories = {
                pageInfo: {
                    totalCount: 8,
                    hasNextPage: true,
                    endCursor:
                        'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                },
                edges: [
                    {
                        node: {
                            id: 'jaredpalmer.formik',
                            fullName: 'jaredpalmer/formik',
                            description: 'Build forms in React, without the tears',
                            language: 'TypeScript',
                            forksCount: 1619,
                            stargazersCount: 21856,
                            ratingAverage: 88,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars2.githubusercontent.com/u/4060187?v=4',
                        },
                        cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                    },
                    {
                        node: {
                            id: 'async-library.react-async',
                            fullName: 'async-library/react-async',
                            description: 'Flexible promise-based React data loader',
                            language: 'JavaScript',
                            forksCount: 69,
                            stargazersCount: 1760,
                            ratingAverage: 72,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars1.githubusercontent.com/u/54310907?v=4',
                        },
                        cursor:
                            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    },
                ],
            };

            // Add your test code here
            const calculateValue = (value) => {
                return value >= 1000 ? `${Math.round((value / 1000) * 10) / 10}k` : value;
            };


            const { debug, getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />)
            // debug();

            const names = getAllByTestId('nametestid');
            names.forEach((value, i) => {
                expect(value).toHaveTextContent(repositories.edges[i].node.fullName)
            })
            const descriptions = getAllByTestId('descriptiontestid');
            descriptions.forEach((value, i) => {
                expect(value).toHaveTextContent(repositories.edges[i].node.description)
            })
            const languages = getAllByTestId('languagetestid');
            languages.forEach((value, i) => {
                expect(value).toHaveTextContent(repositories.edges[i].node.language)
            })
            const forks = getAllByTestId('forkstestid');
            forks.forEach((value, i) => {
                expect(value).toHaveTextContent(calculateValue(repositories.edges[i].node.forksCount))
            })
            const stars = getAllByTestId('starstestid');
            stars.forEach((value, i) => {
                expect(value).toHaveTextContent(calculateValue(repositories.edges[i].node.stargazersCount))
            })
            const ratings = getAllByTestId('ratingtestid');
            ratings.forEach((value, i) => {
                expect(value).toHaveTextContent(calculateValue(repositories.edges[i].node.ratingAverage))
            })
            const reviews = getAllByTestId('reviewstestid');
            reviews.forEach((value, i) => {
                expect(value).toHaveTextContent(calculateValue(repositories.edges[i].node.reviewCount))
            })

        });
    });
});