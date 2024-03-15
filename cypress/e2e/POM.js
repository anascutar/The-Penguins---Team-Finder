export default class POM {
  inputVerification(name, input) {
    return input.invoke("val").then((text) => expect(text).to.equal(name));
  }

  buttonVerification(name, button) {
    return button.invoke("text").then((text) => expect(text).to.equal(name));
  }
}
