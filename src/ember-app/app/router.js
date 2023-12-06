import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-tab-бригада-l');
  this.route('i-i-s-tab-бригада-e',
  { path: 'i-i-s-tab-бригада-e/:id' });
  this.route('i-i-s-tab-бригада-e.new',
  { path: 'i-i-s-tab-бригада-e/new' });
  this.route('i-i-s-tab-должность-l');
  this.route('i-i-s-tab-должность-e',
  { path: 'i-i-s-tab-должность-e/:id' });
  this.route('i-i-s-tab-должность-e.new',
  { path: 'i-i-s-tab-должность-e/new' });
  this.route('i-i-s-tab-сотрудник-l');
  this.route('i-i-s-tab-сотрудник-e',
  { path: 'i-i-s-tab-сотрудник-e/:id' });
  this.route('i-i-s-tab-сотрудник-e.new',
  { path: 'i-i-s-tab-сотрудник-e/new' });
});

export default Router;
