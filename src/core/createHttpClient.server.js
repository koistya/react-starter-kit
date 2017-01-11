/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import Promise from 'bluebird';
import fetch, { Request, Headers, Response } from 'node-fetch';
import { host, apiUrl } from '../config';

fetch.Promise = Promise;
Response.Promise = Promise;

function createHttpClient({ cookie }) {
  return {
    fetch(url, options) {
      if (url.startsWith('//')) {
        return fetch(`https:${url}`, options);
      }

      if (url.startsWith('http')) {
        return fetch(url, options);
      }

      if (url.startsWith('/graphql')) {
        return fetch(`${apiUrl}${url}`, {
          ...options,
          credentials: 'include',
          headers: {
            ...(options && options.headers),
            Cookie: cookie,
          },
        });
      }

      return fetch(`http://${host}${url}`, {
        ...(options || {}),
        credentials: 'include',
        headers: {
          ...(options && options.headers),
          Cookie: this.cookie,
        },
      });
    },

    query(query) {
      return this.fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      }).then(x => x.json());
    },

    Request,
    Headers,
    Response,
  };
}

export default createHttpClient;
