import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-templates2-задача-l');
  this.route('i-i-s-templates2-задача-e',
  { path: 'i-i-s-templates2-задача-e/:id' });
  this.route('i-i-s-templates2-задача-e.new',
  { path: 'i-i-s-templates2-задача-e/new' });
  this.route('i-i-s-templates2-проект-l');
  this.route('i-i-s-templates2-проект-e',
  { path: 'i-i-s-templates2-проект-e/:id' });
  this.route('i-i-s-templates2-проект-e.new',
  { path: 'i-i-s-templates2-проект-e/new' });
  this.route('i-i-s-templates2-сотрудник-l');
  this.route('i-i-s-templates2-сотрудник-e',
  { path: 'i-i-s-templates2-сотрудник-e/:id' });
  this.route('i-i-s-templates2-сотрудник-e.new',
  { path: 'i-i-s-templates2-сотрудник-e/new' });
});

export default Router;
