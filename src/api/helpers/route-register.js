const express = require('express');

/**
 * @function
 * Função para registrar uma rota na aplicação
 * 
 * @param {import('express').RouterOptions} options 
 * 
 * @returns {import('express').Router}
 */
module.exports = (options) => express.Router(options);