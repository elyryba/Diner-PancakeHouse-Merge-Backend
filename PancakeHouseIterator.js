class PancakeHouseIterator {
    constructor(menuItems) {
        this.menuItems = menuItems;
        this.position = 0;
    }

    hasNext() {
        return this.position < this.menuItems.length;
    }

    next() {
        const menuItem = this.menuItems[this.position];
        this.position++;
        return menuItem;
    }
}

module.exports = PancakeHouseIterator;
