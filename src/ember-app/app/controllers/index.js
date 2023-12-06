import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.tab.caption'),
          title: i18n.t('forms.application.sitemap.tab.title'),
          children: [{
            link: 'i-i-s-tab-должность-l',
            caption: i18n.t('forms.application.sitemap.tab.i-i-s-tab-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.tab.i-i-s-tab-должность-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-tab-бригада-l',
            caption: i18n.t('forms.application.sitemap.tab.i-i-s-tab-бригада-l.caption'),
            title: i18n.t('forms.application.sitemap.tab.i-i-s-tab-бригада-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-tab-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.tab.i-i-s-tab-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.tab.i-i-s-tab-сотрудник-l.title'),
            icon: 'folder',
            children: null
          }]
        }
      ]
    };
  }),
})