class Component {
  constructor() {}

  createWrapper(innerHtmlString) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = innerHtmlString;
    return wrapper;
  }

  setState(newState) {
    const oldElement = this.wrapper;
    this.state = { ...newState };
    this.wrapper = this.renderElement();
    if (this.update) {
      this.update(oldElement, this.wrapper);
    }
  }

  renderElement() {
    this.wrapper = this.createWrapper(this.render());
    const plus = document.querySelector(".plus");
    if (this.onClick) {
      plus.addEventListener("click", this.onClick.bind(this), false);
    }
    return this.wrapper;
  }

  render() {
    // custom input
  }
}

function DOMRender(component, DOMElement) {
  DOMElement.appendChild(component.renderElement());
  component.update = (oldEL, newEL) => {
    DOMElement.insertBefore(newEL, oldEL);
    DOMElement.removeChild(old);
  };
}

class AddButton extends Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
  }

  onClick() {
    const newNum = this.state.number + 1;
    this.setState({ ...this.state, number: newNum });
  }

  render() {
    return;
    `<div>{this.state.number}</div> <button class='plus'>ADD 1</button>`;
  }
}

DOMRender(AddButton, document.querySelector(".wrap"));
