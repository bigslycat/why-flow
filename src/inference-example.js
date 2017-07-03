/* @flow */

import { createSelector } from 'reselect';

declare var num: number;
const numCopy = num;

declare function getRandom<T>(items: Array<T>): T;
declare var users: string[];

const random = getRandom(users);

const print = item => console.log(item);

users.forEach(print);

type State = {
  post: {
    date: number,
    author: {
      id: number,
      login: string,
    },
    text: string,
  },
};

const getPost = ({ post }: State) => post;

const getPostDate = createSelector(getPost, ({ date }) => date);
const getPostAuthor = createSelector(getPost, ({ author }) => author);
const getPostText = createSelector(getPost, ({ text }) => text);

const getPostAuthorId = createSelector(getPostAuthor, ({ id }) => id);
const getPostAuthorLogin = createSelector(getPostAuthor, ({ login }) => login);

const getPostMeta = createSelector(
  getPostDate, getPostAuthorId,
  (date, authorId) => ({ date, authorId }),
);

declare var state: State;

const user = getPostAuthor(state);
const meta = getPostMeta(state);
