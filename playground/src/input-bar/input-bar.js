// Copyright 2020 The AMPHTML Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import './input-bar.scss';
import template from './input-bar.hbs';

export default function createInput(target, config) {
  return new Input(target, config);
}

class Input {
  constructor(target, config) {
    target.insertAdjacentHTML('beforeend', template(config));

    this.container = target.querySelector('.input');
    this.input = target.querySelector('input');
    this.submit = target.querySelector('button');
    this.label = target.querySelector('label');
  }

  showError(error) {
    this.label.classList.add('show');
    this.label.innerText = error;
    this.input.focus();
  }

  hideError() {
    this.label.classList.remove('show');
  }

  toggleLoading(force) {
    this.submit.classList.toggle('loading', force);
  }

  get value() {
    return this.input.value;
  }

  set value(value) {
    this.input.value = value;
  }

  set hidden(hide) {
    this.container.classList.toggle('hidden', hide);
  }
}
