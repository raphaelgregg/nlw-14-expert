import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';

import {Home} from './src/pages/home/index.js';

const root = document.querySelector('#app');
document.querySelector('body').classList.add('dark');

root.insertAdjacentHTML("beforeend", Home());