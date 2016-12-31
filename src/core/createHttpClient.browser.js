/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import 'whatwg-fetch';
import { apiUrl } from '../config';

function createHttpClient() {
  return {
    fetch(url, options) {
      if (url.startsWith('/graphql')) {
        return self.fetch.call(self, `${apiUrl}${url}`, {
          ...(options || {}),
          credentials: 'include',
        });
      }
      return self.fetch.call(self, url, options);
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

    Request: self.Request,
    Headers: self.Headers,
    Response: self.Response,
  };
}

export default createHttpClient;
