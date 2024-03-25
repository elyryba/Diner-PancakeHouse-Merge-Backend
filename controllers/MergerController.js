const express = require('express');
const router = express.Router();

// Mock data, replace these with your actual data retrieval methods
const dinerMenu = [
    { name: 'Diner Coffee' },
    { name: 'Diner Pancake' }
];
const pancakeHouseMenu = [
    { name: 'Pancake House Omelette' },
    { name: 'Pancake House Waffle' }
];

// GET /merger endpoint
router.get('/merger', (req, res) => {
    const combinedMenu = dinerMenu.concat(pancakeHouseMenu);
    combinedMenu.sort((a, b) => a.name.localeCompare(b.name));
    res.json(combinedMenu);
});

module.exports = router;
