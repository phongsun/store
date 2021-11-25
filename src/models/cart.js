import React from 'react';

export class Cart extends React.Component {
    constructor(items, total){
        this.items = items;
        this.total = total;
    }
    state = {
        items : [],
        total : 0
    }
}