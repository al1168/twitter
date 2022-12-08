import {atom} from 'recoil'
import { Tweet } from '../typings';
export const globalTweetArrayState :any = atom({
  key: 'globalTweetArrayState',
  default: []
});