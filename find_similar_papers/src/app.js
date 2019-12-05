//This file has the task of giving the possibility to:
//- take the node that has the data (title, author/s and publication year) of the papers
//- show the similar papers divided by methodology


const express = require('express');
const authors = require('./find_by_authors')
const keywords = require('./find_by_keywords')
const reference = require('./find_by_references')
const magazine = require('./find_by_magazine')
