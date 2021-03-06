/*
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as _ from 'lodash';

class ViewService {
  private viewsURL: string;

  constructor(private $http, Constants) {
    'ngInject';
    this.viewsURL = `${Constants.baseURL}configuration/views/`;
  }

  list() {
    return this.$http.get(this.viewsURL);
  }

  get(viewId) {
    return this.$http.get(this.viewsURL + viewId);
  }

  create(view) {
    return this.$http.post(this.viewsURL, view);
  }

  update(view) {
    return this.$http.put(this.viewsURL + view.id, view);
  }

  updateViews(views) {
    if (views && views.length) {
      return this.$http.put(this.viewsURL, views);
    }
  }

  delete(view) {
    return this.$http.delete(this.viewsURL + view.id);
  }
}

export default ViewService;
