class Fish {
  constructor(id, name = 'aa') {
    this._id = id;
    this._name = name;
  }

  animate() {
    anim.play();
    console.log('animating ', this._id);
  }
}
