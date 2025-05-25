class Item {
    value = undefined;
    nextItem = null;
}

class Pila {
    top = null;

    push(value) {
        let item = new Item();
        item.value = value;
        item.nextItem = this.top;
        this.top = item;
    }

    pop() {
        let itemPop = this.top;
        this.top = itemPop.nextItem;
        return itemPop.value;
    }

    toString() {
        let str = "";
        let itemActual = this.top;
        while (itemActual !== null) {
            str += itemActual.value + ", ";
            itemActual = itemActual.nextItem;
        }
        return str;
    }
}

class Cua {
    first;
    last;

    enqueue(value) {
        let item = new Item();
        item.value = value;
        item.nextItem = null;
        if (!this.first) {
            this.first = item;
        } else {
            this.last.nextItem = item;
        }
        this.last = item;
    }

    dequeue() {
        let item = this.first;
        this.first = item.nextItem;
        return item.value;
    }

    toString() {
        let str = "";
        let itemActual = this.first;
        while (itemActual !== null) {
            str += itemActual.value + ", ";
            itemActual = itemActual.nextItem;
        }
        return str;
    }
}


let pila = new Pila();
let cua = new Cua();

// Funcions
function pushItem() {
    let value = prompt("Afegeix un número");
    pila.push(value);
    let element = document.getElementById("stack");
    element.innerHTML = "Stack: " + pila.toString();
}

function popItem() {
    if (pila.top === null) {
        alert("La pila está vacía");
        return;
    }
    alert("Se ha eliminado el: " + pila.pop())
    let element = document.getElementById("stack");
    element.innerHTML = "Stack: " + pila.toString();
}

function enqueueItem() {
    let value = prompt("Afegeix un número");
    cua.enqueue(value);
    let element = document.getElementById("enqueue");
    element.innerHTML = "Enqueue: " + cua.toString();
}

function dequeueItem() {
    if (cua.primerItem === null) {
        alert("La cua está vacía");
        return;
    }
    alert("Se ha eliminado el: " + cua.dequeue())
    let element = document.getElementById("enqueue");
    element.innerHTML = "Enqueue: " + cua.toString();
}