const { Router } = require('express');

const authors = require('./find_by_authors')
const keywords = require('./find_by_keywords')
const references = require('./find_by_references')
const magazine = require('./find_by_magazine')

module.exports = () => {
  const routes = Router();
  authors(routes);
  keywords(routes);
  references(routes);
  magazine(routes);

  return routes;
};
