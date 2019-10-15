import Mock from 'mockjs';
import basicData from './basic';

Mock.Random.name();
Mock.Random.word();
Mock.Random.datetime();
const STATUS = [
  'default',
  'success',
  'info',
  'critical',
  'warning',
  'danger',
]

export default Mock.mock({
  'list|8': [{
    'id|+1': 1,
    name: '@name',
    description: '@word',
    'status|1': STATUS,
    'action_status|1': STATUS,
    update_time: '@datetime'
  }]
});