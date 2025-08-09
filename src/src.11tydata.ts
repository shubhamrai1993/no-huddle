import { enhance11tydata } from './util/i18n';

module.exports = () => {
  // the root page is using the layout for all the site metadata, so better localise it
  // XXX: should we use a custom minimal page for root page? any impacts on SEO?
  return enhance11tydata({}, 'en');
};
